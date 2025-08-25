"use client";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TeamHomeOne from "../homes/TeamHomeOne";
import FooterTwo from "@/layouts/footers/FooterOne";
import AboutArea from "./AboutArea";
import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";


const Aboutus = () => {
        const setLoading = useLoading((state) => state.setLoading)
    const [dataList, setDataList] = useState<any>(null)

        useEffect(() => {
        Promise.all([FetchData.GetSejarah(), FetchData.GetMisi(), FetchData.GetVisi()]).then((res) => {
            setLoading(false)
            setDataList({
                sejarah: res[0]?.content,
                misi: res[1]?.content,
                visi: res[2]?.content
            })
        })
    }, [])

	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Tentang Kami" subtitle="Tentang Kami" bg_img="about-breadcrumb-bg" />
            <AboutArea dataList={dataList} />
			<TeamHomeOne style_2={true} />
			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
