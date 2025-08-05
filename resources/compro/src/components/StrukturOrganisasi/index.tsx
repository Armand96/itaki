"use client";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Aboutus = () => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
				<Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
					<div style={{ width: '100%', height: '100%' }}>
						<Viewer

							fileUrl="/susunan-pengurus.pdf"
							plugins={[defaultLayoutPluginInstance]}
						/>
					</div>
				</Worker>
			</div>

			<FooterTwo />
		</Wrapper>
	);
};

export default Aboutus;
