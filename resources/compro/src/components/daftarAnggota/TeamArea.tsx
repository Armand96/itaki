"use client"
import socialLinks from "@/data/socialLinks";
import team_data from "@/data/team-data";
import useLoading from "@/store/useLoading";
import Image from "next/image";
import Link from "next/link";
import { use, useCallback, useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";
import { useDebounce } from 'use-debounce';
import TableWithPagination from "@/common/TableWithPagination";


const TeamArea = () => {
    const [searchName, setSearchName] = useState("");
    const setLoading = useLoading((state) => state.setLoading);
    const [searchDebounceName] = useDebounce(searchName, 500)
    const [firstLoading, setFirstLoading] = useState(false)
    const [paginateData, setPaginateData] = useState<any>({
        data: [],
        last_page: 1,
        current_page: 1,
        per_page: 10,
    })

    const fetchData = (page: number = 1, page_size= 10, nama: any = '') => {
        setLoading(true)
        FetchData.GetAnggota(`?page=${page}&data_per_page=${page_size}&nama=${nama}`).then((res) => {
            setLoading(false)
            setPaginateData(res)
        })
    }

    const setCurrentPage = (page: number) => {
        fetchData(page, paginateData?.per_page)

    }

       const setCurrentPageRows = (page: number) => {
        fetchData(1, page)

    }


    useEffect(() => {
        if (firstLoading) {
            fetchData(1, paginateData?.per_page, searchDebounceName)
        }
    }, [searchDebounceName])


    useEffect(() => {
        Promise.all([fetchData()]).then((res) => {
            setLoading(false)
            setFirstLoading(true)
        })
    }, [])

    const columns = [
        { key: "nama", label: "Nama", sortable: true,  render: (value: any) => <div style={{width: "20%"}}>{value}</div> },
        { key: "jabatan", label: "Jabatan Kerja SKK", sortable: true, },
        { key: "jenjang", label: "Jenjang", sortable: true, },
        { key: "nomor_kta", label: "Nomor KTA", sortable: true, },
        { key: "nomor_registrasi", label: "Nomor Registrasi", sortable: true, },

    ];


    return (
        <div className="luminix-padding-section4">
            <div className="container">
                <div className="luminix-section-title center">
                    {/* <h2>Daftar Anggota</h2> */}
                </div>

                {/* Filter Section */}
                <div
                    className="filter-wrapper d-flex justify-content-center align-items-center mb-4"
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        overflow: "hidden",
                        maxWidth: "420px",
                        margin: "0 auto",
                    }}
                >
                    {/* Dropdown
                    <div style={{ flex: "1 1 50%", minWidth: "150px" }}>
                        <Select
                            options={wilayahOptions}
                            value={wilayah}
                            onChange={setWilayah}
                            placeholder="Wilayah"
                            isClearable
                            menuPortalTarget={document.body} // pindahkan dropdown ke body
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    border: "none",
                                    boxShadow: "none",
                                    minHeight: "38px",
                                }),
                                menuPortal: (base) => ({ ...base, zIndex: 9999 }), // pastikan di atas semua elemen
                            }}
                        />
                    </div> */}

                    {/* Input */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nama Anggota"
                        style={{
                            // flex: "1 1 50%",
                            border: "none",
                            height: "38px",
                            padding: "0 10px",
                        }}
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Nama Jabatan"
                        style={{
                            // flex: "1 1 50%",
                            border: "none",
                            height: "38px",
                            borderLeft: "1px solid #001A3D",
                            padding: "0 10px",
                            boxShadow: "none",
                        }}
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    /> */}
                </div>


                <div className="row mt-5">
                    <TableWithPagination
                        columns={columns}
                        data={paginateData?.data}
                        onChangeRows={setCurrentPageRows}
                        currentPage={paginateData?.current_page}
                        pageCount={paginateData?.per_page}
                        lastPage={paginateData?.last_page}
                        onPageChange={setCurrentPage}
                    />

                </div>
            </div>
        </div>
    );
};

export default TeamArea;
