"use client";

import TableWithPagination from "@/common/TableWithPagination";
import { useEffect, useState } from "react";

interface Publikasi {
    id: number;
    nama: string;
    penerbit: string;
    tahun: number;
    link?: string;
}

export default function PublikasiIlmiahTable() {
    const [data, setData] = useState<Publikasi[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        // Simulasi fetch data
        const totalItems = 12;
        const dummyData = Array.from({ length: itemsPerPage }, (_, i) => ({
            id: i + 1 + currentPage * itemsPerPage,
            nama: `Publikasi ${i + 1 + currentPage * itemsPerPage}`,
            penerbit: `Penerbit ${i + 1}`,
            tahun: 2020 + ((i + currentPage) % 4),
            link: "https://example.com",
        }));
        setData(dummyData);
        setPageCount(Math.ceil(totalItems / itemsPerPage));
    }, [currentPage]);

    const columns = [
        { key: "nama", label: "Nama Publikasi" },
        { key: "penerbit", label: "Penerbit" },
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
            <TableWithPagination
                columns={columns}
                data={data}
                currentPage={currentPage}
                pageCount={pageCount}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
