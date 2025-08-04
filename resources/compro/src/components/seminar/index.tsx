import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";


const Seminar = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Seminar" subtitle="Seminar" bg_img="about-breadcrumb-bg" />

			<FooterTwo />
		</Wrapper>
	);
};

export default Seminar;
