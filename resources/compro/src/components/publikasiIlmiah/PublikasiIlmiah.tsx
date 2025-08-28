"use client";

import TableWithPagination from "@/common/TableWithPagination";
import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";

interface Publikasi {
    id: number;
    nama: string;
    penerbit: string;
    tahun: number;
    link?: string;
}

export default function PublikasiIlmiahTable() {
    const setLoading = useLoading((state) => state.setLoading)
    const [paginateData, setPaginateData] = useState<any>({
        data: [],
        last_page: 1,
        current_page: 1,
        per_page: 10,
    })


    const fetchData = (page: number = 1) => {
        setLoading(true)
        FetchData.GetPublikasi(`?page=${page}&data_per_page=10`).then((res) => {
            setLoading(false)
            setPaginateData(res)
        })
    }


    useEffect(() => {
        fetchData()
    }, [])

    const setCurrentPage = (page: number) => {
        fetchData(page)
    }


    useEffect(() => {
        Promise.all([fetchData(), FetchData.GetKlienList()]).then((res) => {
            setLoading(false)
        })
    }, [])


    const columns = [
        { key: "judul", label: "Nama Publikasi" , sortable: true, },
        { key: "penerbit", label: "Penerbit",  sortable: true, },
        { key: "tahun_terbit", label: "Tahun Terbit",  sortable: true, render: (value: any) => value?.split("-")[0] },
        {
            key: "file_path",
            label: "Aksi",
            render: (value: any) =>
                value ? (
                    <a href={`${process.env.NEXT_PUBLIC_URL}storage/${value}`} target="_blank" rel="noopener noreferrer">
                        Link
                    </a>
                ) : (
                    "-"
                ),
        },
    ];


    return (
        <div className="container py-4">
            <TableWithPagination
                columns={columns}
                data={paginateData?.data}
                currentPage={paginateData?.current_page}
                pageCount={paginateData?.per_page}
                lastPage={paginateData?.last_page}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
