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


    const fetchData = (page: number = 1, page_size = 10) => {
        setLoading(true)
        FetchData.GetPublikasi(`?page=${page}&data_per_page=${page_size}`).then((res) => {
            setLoading(false)
            setPaginateData(res)
        })
    }


    const setCurrentPageRows = (page: number) => {
        fetchData(1, page)
    }


    useEffect(() => {
        fetchData()
    }, [])

    const setCurrentPage = (page: number) => {
        fetchData(page, paginateData?.per_page)
    }


    useEffect(() => {
        Promise.all([fetchData(), FetchData.GetKlienList()]).then((res) => {
            setLoading(false)
        })
    }, [])


    const columns = [
        { key: "judul", label: "Nama Publikasi", sortable: true, },
        { key: "penerbit", label: "Penerbit", sortable: true, },
        { key: "tahun_terbit", label: "Tahun Terbit", sortable: true, render: (value: any) => value?.split("-")[0] },
        {
            key: "file_path",
            label: "Aksi",
            render: (value: any) =>
                value ? (
                    <a className="btn btn-primary" href={`${process.env.NEXT_PUBLIC_URL}storage/${value}`} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "30px"}}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
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
                onChangeRows={setCurrentPageRows}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
