import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ContactArea from "./ContactArea";
import GoogleMap from "./GoogleMap";


export default function Contactus() {
          const images = [
        "/assets/images/hero/hero-01.png",
        "/assets/images/hero/hero-02.jpg",
        "/assets/images/hero/hero-01.png",
    ];


  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Kontak Kami" subtitle="Kami siap membantu anda"  images={images}  />
      <ContactArea />
      <GoogleMap />
    </Wrapper>
  )
}
