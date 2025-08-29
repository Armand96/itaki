"use client"
import socialLinks from "@/data/socialLinks";
import team_data from "@/data/team-data";
import useLoading from "@/store/useLoading";
import Image from "next/image";
import Link from "next/link";
import { use, useCallback, useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";
import { useDebounce } from 'use-debounce';


const TeamArea = () => {
    const [searchName, setSearchName] = useState("");
    const setLoading = useLoading((state) => state.setLoading);
    const [loading, setLocalLoading] = useState(false);
    const [dataList, setDataList] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [searchDebounceName] = useDebounce(searchName, 500)
    const [firstLoad, setFirstLoad] = useState(false)


    useEffect(() => {
        if (firstLoad) {
            FetchData.GetAnggota(`?data_per_page=10&page=1&nama=${searchName}`).then((res) => {
                if (res?.data?.length) {
                    setDataList(res.data);
                    if (res.data.length < 10) setHasMore(false);
                } else {
                    setHasMore(false);
                }
            })
        }


    }, [searchDebounceName]);


    const fetchGallery = useCallback(async () => {
        if (loading || !hasMore) return;
        setLocalLoading(true);
        try {
            const res = await FetchData.GetAnggota(`?data_per_page=10&page=${page}&nama=${searchDebounceName}`);
            if (res?.data?.length) {
                setDataList((prev) => [...prev, ...res.data]);
                if (res.data.length < 10) setHasMore(false);
            } else {
                setHasMore(false);
            }
        } finally {
            setLocalLoading(false);
            setLoading(false);
        }
    }, [page, loading, hasMore, setLoading, searchDebounceName]);

    useEffect(() => {

        fetchGallery();
        setFirstLoad(true)
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 300 &&
                hasMore &&
                !loading
            ) {
                setPage((prev) => prev + 1);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasMore, loading]);


    return (
        <div className="luminix-padding-section4">
            <div className="container">
                <div className="luminix-section-title center">
                    <h2>Daftar Anggota</h2>
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
                    {dataList.length ? (
                        dataList.map((member) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={member.id}>
                                <div className="luminix-team-thumb">
                                    <Image
                                        src={member?.image ? `${process.env.NEXT_PUBLIC_URL}storage/${member?.image}` : "/assets/images/team/team1.png"}
                                        alt={member.nama}
                                        width={306}
                                        height={400}
                                    />
                                    <div className="luminix-team-content">
                                        <h5>{member.nama}</h5>
                                        <p>{member.jabatan}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Tidak ada anggota ditemukan</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamArea;
