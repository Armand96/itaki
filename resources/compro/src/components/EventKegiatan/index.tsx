'use client';
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import EventKegiatan from "./EventKegiatanArea";


const Seminar = () => {

        const images = [
        "/assets/images/hero/hero-01.png",
        "/assets/images/hero/hero-02.jpg",
        "/assets/images/hero/hero-01.png",
    ];



	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Event Kegiatan" subtitle=""  images={images}/>
            <EventKegiatan />
			<FooterTwo />
		</Wrapper>
	);
};

export default Seminar;
