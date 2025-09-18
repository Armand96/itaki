import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import PublikasiIlmiahTable from "./PublikasiIlmiah";


const PublikasiIlmiah = () => {
           const images = [
        "/assets/images/hero/hero-01.png",
        "/assets/images/hero/hero-02.jpg",
        "/assets/images/hero/hero-01.png",
    ];


	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Publikasi Ilmiah" subtitle="Publikasi Ilmiah"  images={images} />
                <PublikasiIlmiahTable />
			<FooterTwo />
		</Wrapper>
	);
};

export default PublikasiIlmiah;
