import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";


const Aboutus = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Sertifikasi" subtitle="Sertifikasi" bg_img="about-breadcrumb-bg" />

			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
