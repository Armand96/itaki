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
    const [activeKategori, setActiveKategori] = useState(1);
    const [categoriesList, setCategoriesList] = useState<any>([])
    const setLoading = useLoading((state) => state.setLoading)
    const [paginateData, setPaginateData] = useState<any>({
        data: [],
        last_page: 1,
        current_page: 1,
        per_page: 10,
    })

    const fetchData = (page: number = 1, kategori: any = '') => {
        setLoading(true)
        FetchData.GetRegulasi(`?page=${page}&data_per_page=10&kategori=${kategori}`).then((res) => {
            setLoading(false)
            setPaginateData(res)
        })
    }

    const setCurrentPage = (page: number) => {
        fetchData(page, activeKategori)
    }


    useEffect(() => {
        Promise.all([fetchData(), FetchData.GetKategori(`?menu_tujuan=Regulasi`)]).then((res) => {
            setLoading(false)
            setCategoriesList(res[1]?.data || [])
        })
    }, [])

    const handleKategoriChange = (kategoriId: number) => {
        setActiveKategori(kategoriId);
        fetchData(1, kategoriId);
    }




    const columns = [
        { key: "no_regulasi", label: "No Regulasi" ,  sortable: true,},
        { key: "judul", label: "Nama Regulasi" ,  sortable: true,},
        { key: "tahun_terbit", label: "Tahun Terbit",  sortable: true, render: (value: any) => value?.split("-")[0] },
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
            />

        </div>
    );
}
