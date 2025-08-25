"use client";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
import useLoading from "@/store/useLoading";
import FetchData from "../../../services/FetchData";

// worker pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

const KodeEtik = () => {
	const [numPages, setNumPages] = useState<number>(0);
    const setLoading = useLoading((state) => state.setLoading)
    const [pdf, setPdf] = useState<any>(null)

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};

useEffect(() => {
  FetchData.GetKodeEtik().then(async (res) => {
    try {
      setLoading(false);

      const fileUrl = `${process.env.NEXT_PUBLIC_URL}storage${res?.file_path}`;

      const response = await fetch(fileUrl);

      if (!response.ok) throw new Error("Gagal fetch PDF");

      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      setPdf(url);
    } catch (err) {
      console.error("Error ambil PDF:", err);
    }
  });
}, []);



	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb title="Kode Etik" subtitle="Struktur Organisasi" bg_img="about-breadcrumb-bg" />

			<div
				className="container"
				style={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					margin: "30px auto",
				}}
			>
				<div style={{ width: "100%", height: "100%", overflow: "auto" }}>
					<Document
						file={pdf}// file dari folder public
						onLoadSuccess={onDocumentLoadSuccess}
						loading={<p>Loading PDF...</p>}
					>
						{Array.from(new Array(numPages), (_, index) => (
							<Page key={`page_${index + 1}`} pageNumber={index + 1} width={800} />
						))}
					</Document>
				</div>
			</div>

			<FooterTwo />
		</Wrapper>
	);
};

export default KodeEtik;
