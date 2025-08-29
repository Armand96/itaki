"use client"
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import { useSearchParams } from "next/navigation";
import FooterOne from "@/layouts/footers/FooterOne";
import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";


const DetailSeminar = () => {

      const searchParams = useSearchParams();
      const id = searchParams.get('id');
        const setLoading = useLoading((state) => state.setLoading)
        const [data, setData] = useState<any>(null)

        useEffect(() => {
            FetchData.GetKegiatan(`?id=${id}`).then((res) => {
                setData(res)
                setLoading(false)
            })
        }, [])





  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Market Analysis" subtitle="Market Analysis" bg_img="singleportfolio-breadcrumb-bg" />
      <FooterOne />
    </Wrapper>
  );
};

export default DetailSeminar;
