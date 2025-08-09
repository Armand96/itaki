"use client";

import TableWithPagination from "@/common/TableWithPagination";
import { useState } from "react";
import ReactPaginate from "react-paginate";

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

const allData: RegulasiData[] = Array.from({ length: 30 }).map((_, i) => ({
    no: i + 1,
    nama: `Regulasi ${i + 1}`,
    tahun: 2020 + (i % 5),
}));

export default function Regulasi() {
    const [activeKategori, setActiveKategori] = useState("uu");
    const itemsPerPage = 5;
    const [itemOffset, setItemOffset] = useState(0);

    const pageCount = Math.ceil(allData.length / itemsPerPage);
    const endOffset = itemOffset + itemsPerPage;
    const currentData = allData.slice(itemOffset, endOffset);
    const [currentPage, setCurrentPage] = useState(0);


    const columns = [
        { key: "no", label: "No Regulasi" },
        { key: "nama", label: "Nama Regulasi" },
        { key: "tahun", label: "Tahun Terbit" },
        {
            key: "link",
            label: "Aksi",
            render: (value: string) =>
                value ? (
                    <a href={value} target="_blank" rel="noopener noreferrer">
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
    {kategoriFilters.map((filter) => (
        <button
            key={filter.value}
            onClick={() => setActiveKategori(filter.value)}
            className={`btn px-3 py-2 ${
                activeKategori === filter.value ? "btn-primary" : "btn-outline-primary"
            }`}
        >
            {filter.label}
        </button>
    ))}
</div>


            <TableWithPagination
                columns={columns}
                data={currentData}
                currentPage={currentPage}
                pageCount={pageCount}
                onPageChange={setCurrentPage}
            />

        </div>
    );
}
