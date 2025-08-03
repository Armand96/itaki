import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import CareerDetailsArea from "./CareerDetailsArea";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";

 

export default function SingleCareer() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Career Details" subtitle="Career Details" bg_img="singlecareer-breadcrumb-bg" />
      <CareerDetailsArea />
      <CtaHomeTwo />
      <FooterTwo />
    </Wrapper>
  )
}
