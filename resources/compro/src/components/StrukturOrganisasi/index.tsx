import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import Image from "next/image";


const Aboutus = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Struktur Organisasi" subtitle="Struktur Organisasi" bg_img="about-breadcrumb-bg" />
            <div className="container" style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center", margin: "30px auto" }}>
                  <Image src="https://www.rakgudangheavyduty.com/wp-content/uploads/2024/01/STRUKTUR-ORGANISASI-BAGIAN-GUDANG-1.jpg" className="img-fluid" alt="..." width={600} height={600}  />
            </div>
			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
