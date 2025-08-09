import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import SeminarTable from "./SeminarTable";


const Seminar = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Seminar" subtitle="Seminar" bg_img="about-breadcrumb-bg" />
            <SeminarTable />
			<FooterTwo />
		</Wrapper>
	);
};

export default Seminar;
