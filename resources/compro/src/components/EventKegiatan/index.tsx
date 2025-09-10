'use client';
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import EventKegiatan from "./EventKegiatanArea";


const Seminar = () => {

	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Event Kegiatan" subtitle="" bg_img="about-breadcrumb-bg" />
            <EventKegiatan />
			<FooterTwo />
		</Wrapper>
	);
};

export default Seminar;
