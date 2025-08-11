"use client"
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SinglePortfolioArea from "./SinglePortfolioArea";
import { useSearchParams } from "next/navigation";
import FooterOne from "@/layouts/footers/FooterOne";


const DetailSeminar = () => {

      const searchParams = useSearchParams();
  const id = searchParams.get('id');

  console.log("id",id)


  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Market Analysis" subtitle="Market Analysis" bg_img="singleportfolio-breadcrumb-bg" />
      <SinglePortfolioArea />
      <FooterOne />
    </Wrapper>
  );
};

export default DetailSeminar;
