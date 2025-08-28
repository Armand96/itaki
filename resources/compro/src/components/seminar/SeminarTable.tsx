"use client"

import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FetchData from "../../../services/FetchData";
import TableWithPagination from "@/common/TableWithPagination";
import dayjs from "dayjs";


const SeminarTable = () => {

    const setLoading = useLoading((state) => state.setLoading)
    const [paginateData, setPaginateData] = useState<any>({
        data: [],
        last_page: 1,
        current_page: 1,
        per_page: 10,
    })

    const fetchData = (page: number = 1, tgl: any = '') => {
        setLoading(true)
        FetchData.GetKegiatan(`?page=${page}&tgl_event=${tgl}&kategori=webinar`).then((res) => {
            setLoading(false)
            setPaginateData(res)
        })
    }

    const setCurrentPage = (page: number) => {
        fetchData(page)
    }

    useEffect(() => {
        fetchData()
    }, [])

        const columns = [
        { key: "judul", label: "Nama Kegiatan" ,  sortable: true,},
        { key: "short_desc", label: "deksripri" ,  sortable: true,},
        { key: "tgl_event", label: "Tanggal",  sortable: true, render:(value: string) => dayjs(value).format("DD MMMM YYYY") },
        {
            key: "pdf_path",
            label: "Aksi",
            render: (value: string) =>
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
        <div className="container py-5">
            {/* Filter Tanggal */}
            {/* <div className="row mb-4 g-3">
                <div className="col-auto">
                    <input type="date" className="form-control shadow-sm px-3" />
                </div>
                <div className="col-auto">
                    <input type="date" className="form-control shadow-sm  px-3" />
                </div>
            </div> */}


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
};

export default SeminarTable;
