import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import SkemaSertifikasi from "./Sertifikasi";


const Aboutus = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Sertifikasi" subtitle="Sertifikasi" bg_img="about-breadcrumb-bg" />
            <SkemaSertifikasi />
			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
