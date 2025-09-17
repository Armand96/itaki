import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import GaleriArea from "./galeri";


const Galeri = () => {

           const images = [
        "/assets/images/hero/hero-01.png",
        "/assets/images/hero/hero-02.jpg",
        "/assets/images/hero/hero-01.png",
    ];

	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Galeri" subtitle="Galeri"  images={images}/>
            <GaleriArea />
			<FooterTwo />
		</Wrapper>
	);
};

export default Galeri;
