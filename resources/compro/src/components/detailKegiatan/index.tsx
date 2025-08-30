"use client"
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import { useSearchParams } from "next/navigation";
import FooterOne from "@/layouts/footers/FooterOne";
import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";
import Image from "next/image";
import dayjs from "dayjs";

const DetailSeminar = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const setLoading = useLoading((state) => state.setLoading);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        FetchData.GetKegiatanDetail(`/${id}`).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [id]);

    return (
        <Wrapper>
            <HeaderOne />
            <Breadcrumb
                title={data?.judul}
                subtitle={data?.kategori}
bg_img="about-breadcrumb-bg"            />

            <div className="container my-4">
                {data ? (
                    <div className="bg-white shadow-sm rounded p-4">
                        {/* Header dengan tanggal + status badge */}
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <p className="mb-0 text-muted">
                                {dayjs(data?.tgl_event).format("DD MMMM YYYY")}
                            </p>

                            {data?.status_event === 1 ? (
                                <span className="badge bg-success">Sedang berlangsung</span>
                            ) :
                                dayjs().isAfter(dayjs(data?.tgl_event)) ? (
                                    <span className="badge bg-secondary">Sudah berlalu</span>
                                ) : (
                                    <span className="badge bg-warning text-dark">Akan datang</span>
                                )
                            }
                        </div>

                        {/* Gambar */}
                        {data?.cover_image && (
                            <div className="mb-4">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_URL}storage/${data?.cover_image}`}
                                    alt={data.judul}
                                    width={800}
                                    height={400}
                                    className="img-fluid rounded"
                                />
                            </div>
                        )}

                        {/* Deskripsi */}
                        <div
                            className="ql-editor"
                            dangerouslySetInnerHTML={{ __html: data?.detail || "" }}
                        />
                    </div>
                ) : (
                    <p className="text-center text-muted">Loading...</p>
                )}
            </div>

            <FooterOne />
        </Wrapper>
    );
};

export default DetailSeminar;
