import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import Regulasi from "./regulasi";


const Aboutus = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Regulasi" subtitle="Regulasi" bg_img="about-breadcrumb-bg" />
            <Regulasi />
			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
