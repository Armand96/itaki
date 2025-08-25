"use client";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";

const Aboutus = () => {

	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Struktur Organisasi" subtitle="Struktur Organisasi" bg_img="about-breadcrumb-bg" />
			<div
				className="container"
				style={{
					height: "120vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: "30px auto"
				}}
			>

			</div>

			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
