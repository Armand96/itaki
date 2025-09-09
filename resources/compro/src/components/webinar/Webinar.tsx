"use client"

import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import "dayjs/locale/id";
dayjs.locale("id");

const WebinarContent = () => {
    const setLoading = useLoading((state) => state.setLoading);
    const [paginateData, setPaginateData] = useState<any>({
        data: [],
        last_page: 1,
        current_page: 1,
        per_page: 10,
    });
    const [loadingMore, setLoadingMore] = useState(false);

    const fetchData = async (page: number = 1, append = false) => {
        setLoading(true);
        try {
            const res = await FetchData.GetKegiatan(`?page=${page}&kategori=webinar`);
            setPaginateData((prev: any) => ({
                ...res,
                data: append ? [...prev.data, ...res.data] : res.data,
            }));
        } finally {
            setLoading(false);
        }
    };

    // Load awal
    useEffect(() => {
        fetchData();
    }, []);

    // Infinite scroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 300
            ) {
                if (
                    !loadingMore &&
                    paginateData.current_page < paginateData.last_page
                ) {
                    setLoadingMore(true);
                    fetchData(paginateData.current_page + 1, true).then(() =>
                        setLoadingMore(false)
                    );
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [paginateData, loadingMore]);

    return (
        <div className="container py-5">
            <div className="row luminix-portfolio-column" id="luminix-portfolio-grid">
                {paginateData?.data?.map((item: any) => (
                    <div
                        key={item.id}
                        className="col-xl-6 col-lg-6 col-md-6 col-sm-6 collection-grid-item"

                    >
                        <div className="luminix-p-wrap wrap2">
                            <Link
                                href={`/seminar/detail?id=${item?.id}`}
                                className="luminix-p-thumb"
                            >
                                <Image
                                    width={550}
                                    height={450}
                                    src={item?.cover_image ? `${process.env.NEXT_PUBLIC_URL}storage/${item?.cover_image}` : "/assets/images/broken-image.png" }
                                    alt={item.judul}
                                />
                                <div
                                    className="luminix-p-content"
                                    style={{
                                        display: "flex",
                                        gap: 0,
                                        width: "80%",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h4 style={{ fontSize: "18px"}}>{item.judul}</h4>
                                    <p style={{ marginTop: "10px" }}>
                                        {dayjs(item?.tgl_event).format("D MMMM YYYY")}
                                    </p>

                                    {/* Badge status */}
                                    {item?.status_event === 1 ? (
                                        <span className="badge bg-success">
                                            Sedang berlangsung
                                        </span>
                                    ) : dayjs().isAfter(dayjs(item?.tgl_event)) ? (
                                        <span className="badge bg-secondary">
                                            Sudah berlalu
                                        </span>
                                    ) : (
                                        <span className="badge bg-warning text-dark">
                                            Akan datang
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Loader ketika scroll */}
            {loadingMore && (
                <div className="text-center py-3">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebinarContent;
