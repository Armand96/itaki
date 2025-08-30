import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import WebinarContent from "./Webinar";


const WebBinar = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Webinar" subtitle="Webinar" bg_img="about-breadcrumb-bg" />
            <WebinarContent />
			<FooterTwo />
		</Wrapper>
	);
};

export default WebBinar;
