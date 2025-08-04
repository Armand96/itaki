import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import GaleriArea from "./galeri";


const Galeri = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Galeri" subtitle="Galeri" bg_img="about-breadcrumb-bg" />
            <GaleriArea />
			<FooterTwo />
		</Wrapper>
	);
};

export default Galeri;
