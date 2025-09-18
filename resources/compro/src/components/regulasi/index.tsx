import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import Regulasi from "./regulasi";


const Aboutus = () => {

    const images = [
        "/assets/images/regulasi/regulasi.jpg",
    ];


	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Regulasi" subtitle="Regulasi"images={images} />
            <Regulasi />
			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
