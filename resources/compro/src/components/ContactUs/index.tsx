import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import ContactArea from "./ContactArea";
import GoogleMap from "./GoogleMap";


export default function Contactus() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" bg_img="contactus-breadcrumb-bg" />
      <ContactArea />
      <GoogleMap />
      <CtaHomeTwo />
      <FooterTwo />       
    </Wrapper>
  )
}
