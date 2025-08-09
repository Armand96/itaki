import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ContactArea from "./ContactArea";
import GoogleMap from "./GoogleMap";


export default function Contactus() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Kontak Kami" subtitle="Kami siap membantu anda"   bg_img="about-breadcrumb-bg" />
      <ContactArea />
      <GoogleMap />
    </Wrapper>
  )
}
