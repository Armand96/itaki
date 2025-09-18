import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TeamArea from "./TeamArea";
import FooterOne from "@/layouts/footers/FooterOne";


const Aboutus = () => {
       const images = [
        "/assets/images/hero/hero-01.png",
        "/assets/images/hero/hero-02.jpg",
        "/assets/images/hero/hero-01.png",
    ];

	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Daftar Anggota" subtitle="" images={images} />
			<TeamArea  />
			<FooterOne />
		</Wrapper>
	);
};

export default Aboutus;
