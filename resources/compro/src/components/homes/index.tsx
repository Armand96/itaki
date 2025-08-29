
"use client";
import HeroHomeOne from "./HeroHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import TeamHomeOne from "./TeamHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";


const HomeOne = () => {
    const setLoading = useLoading((state) => state.setLoading)
    const [dataList, setDataList] = useState<any>(null)

   useEffect(() => {
        Promise.all([FetchData.GetSambutan(), FetchData.GetKlienList(), FetchData.GetAnggota(`?urutan_non_null=1`)]).then((res) => {
            setLoading(false)
            setDataList({
                sambutan: res[0]?.content,
                klien: res[1],
                team: res[2]?.data
            })
        })
   }, [])


    return (
        <Wrapper>
            <HeaderOne />
            <HeroHomeOne />
            <AboutHomeOne sambutan={dataList?.sambutan} />
            <TeamHomeOne team={dataList?.team} />
            <TestimonialHomeOne klien={dataList?.klien}/>
            <FooterOne />
        </Wrapper>
    );
};

export default HomeOne;
