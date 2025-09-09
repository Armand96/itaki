import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TeamArea from "./TeamArea";
import FooterOne from "@/layouts/footers/FooterOne";


const Aboutus = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Daftar Anggota" subtitle="" bg_img="about-breadcrumb-bg" />
			<TeamArea  />
			<FooterOne />
		</Wrapper>
	);
};

export default Aboutus;
