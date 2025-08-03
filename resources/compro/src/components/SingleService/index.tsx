import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SingleServiceArea from "./SingleServiceArea";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";

 

 
const SingleService = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Data Security" subtitle="Data Security" bg_img="singleservice-breadcrumb-bg" />
      <SingleServiceArea />
      <CtaHomeTwo />
      <FooterTwo />      
    </Wrapper>
  );
};

export default SingleService;