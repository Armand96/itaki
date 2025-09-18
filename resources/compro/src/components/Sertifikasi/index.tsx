import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import SkemaSertifikasi from "./Sertifikasi";


const Aboutus = () => {

    const images = [
        "/assets/images/keangotaan/sertifikasi.jpg",
    ];

	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Sertifikasi" subtitle="Sertifikasi" images={images}  />
            <SkemaSertifikasi />
			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
