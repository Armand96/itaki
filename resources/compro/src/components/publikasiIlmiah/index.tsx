import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import PublikasiIlmiahTable from "./PublikasiIlmiah";


const PublikasiIlmiah = () => {
    const images = [
        "/assets/images/publikasi/publikasi.jpg",
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
