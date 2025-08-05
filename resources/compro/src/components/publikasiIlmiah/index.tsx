import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";


const PublikasiIlmiah = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Publikasi Ilmiah" subtitle="Publikasi Ilmiah" bg_img="about-breadcrumb-bg" />

			<FooterTwo />
		</Wrapper>
	);
};

export default PublikasiIlmiah;
