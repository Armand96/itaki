"use client"

import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import "dayjs/locale/id";
dayjs.locale("id");

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
        FetchData.GetKegiatan(`?page=${page}&tgl_event=${tgl}&kategori=seminar`).then((res) => {
            setLoading(false)
            setPaginateData(res)
        })
    }


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="container py-5">
            <div className="row luminix-portfolio-column" id="luminix-portfolio-grid">
                {
                    paginateData?.data?.map((item, index) => (
                    <div key={"item.id"} className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 collection-grid-item`}>

                    <div className="luminix-p-wrap wrap2">
                        <Link href={`/seminar/detail?id=${item?.id}`} className="luminix-p-thumb">
                            <Image width={550} height={550} src={`${process.env.NEXT_PUBLIC_URL}storage/${item?.cover_image}`} alt={"item.judul"} />
                            <div className="luminix-p-content" style={{ display: "flex", gap: 0, width: "80%", flexDirection: "column", }}>
                                <h4>
                                   {
                                    item.judul
                                   }
                                </h4>
                                <p style={{ marginTop: "10px"}}>{dayjs(item?.tgl_event).format(" D MMMM YYYY")}</p>
                            </div>
                        </Link>
                    </div>

                </div>))
                }
            </div>


        </div>
    );
};

export default SeminarTable;
