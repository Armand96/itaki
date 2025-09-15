"use client";

import TableWithPagination from "@/common/TableWithPagination";
import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FetchData from "../../../services/FetchData";

// Data dummy
const kategoriFilters = [
    { label: "UU", value: "uu" },
    { label: "Peraturan Pemerintah", value: "pp" },
    { label: "Peraturan LPK", value: "lpk" },
];

interface RegulasiData {
    no: number;
    nama: string;
    tahun: number;
}


export default function Regulasi() {
    const [activeKategori, setActiveKategori] = useState();
    const [categoriesList, setCategoriesList] = useState<any>([])
    const setLoading = useLoading((state) => state.setLoading)
    const [paginateData, setPaginateData] = useState<any>({
        data: [],
        last_page: 1,
        current_page: 1,
        per_page: 10,
    })

    const fetchData = (page: number = 1, page_size= 10, kategori: any = '') => {
        setLoading(true)
        FetchData.GetRegulasi(`?page=${page}&data_per_page=${page_size}&kategori=${kategori}`).then((res) => {
            setLoading(false)
            setPaginateData(res)
        })
    }

    const setCurrentPage = (page: number) => {
        fetchData(page, paginateData?.per_page,  activeKategori)
    }


   const setCurrentPageRows = (page: number) => {
        fetchData(1, page, activeKategori)
    }

    useEffect(() => {
        Promise.all([fetchData(), FetchData.GetKategori(`?menu_tujuan=Regulasi`)]).then((res) => {
            setLoading(false)
            setActiveKategori(res[1]?.data[0]?.id)
            setCategoriesList(res[1]?.data || [])
        })
    }, [])

    const handleKategoriChange = (kategoriId: number) => {
        setActiveKategori(kategoriId);
        fetchData(1, paginateData?.per_page, kategoriId);
    }




    const columns = [
        { key: "no_regulasi", label: "No Regulasi" ,  sortable: true,},
        { key: "judul", label: "Nama Regulasi" ,  sortable: true,},
        { key: "tahun_terbit", label: "Tahun Terbit",  sortable: true, render: (value: any) => value?.split("-")[0] },
         {
            key: "pdf_path",
            label: "Aksi",
                        width: "80px",
            render: (value: any) =>
                value ? (
                    <a className="" href={`${process.env.NEXT_PUBLIC_URL}storage/${value}`} target="_blank" rel="noopener noreferrer">


                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "25px", margin: "auto", height: "25px" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </a>
                ) : (
                    "-"
                ),
        },
    ];


    return (
        <div className="container py-4">
            {/* Filter Kategori */}
            <div className="d-flex flex-column flex-md-row justify-content-center gap-2 mb-4 align-items-md-center">
                {categoriesList.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => handleKategoriChange(filter.id)}
                        className={`btn px-3 py-2 ${activeKategori === filter.id ? "btn-primary" : "btn-outline-primary"
                            }`}
                    >
                        {filter.nama_kategori}
                    </button>
                ))}
            </div>


            <TableWithPagination
                columns={columns}
                data={paginateData?.data}
                currentPage={paginateData?.current_page}
                pageCount={paginateData?.per_page}
                lastPage={paginateData?.last_page}
                onPageChange={setCurrentPage}
                                onChangeRows={setCurrentPageRows}
            />

        </div>
    );
}
