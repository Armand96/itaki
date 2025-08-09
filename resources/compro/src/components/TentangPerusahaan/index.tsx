import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TeamHomeOne from "../homes/TeamHomeOne";
import FooterTwo from "@/layouts/footers/FooterOne";
import AboutArea from "./AboutArea";
import AboutCounterArea from "./AboutCounterArea";


const Aboutus = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Visi Misi" subtitle="Visi Misi" bg_img="about-breadcrumb-bg" />
            <AboutArea />
            <AboutCounterArea />
			<TeamHomeOne style_2={true} />
			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
