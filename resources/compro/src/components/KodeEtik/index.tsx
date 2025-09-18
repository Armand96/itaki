"use client";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";

import { useEffect, useState } from "react";
import useLoading from "@/store/useLoading";
import FetchData from "../../../services/FetchData";

const KodeEtik = () => {
  const setLoading = useLoading((state) => state.setLoading);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const images = [
        "/assets/images/about-us/kode-etik.jpg",
    ];


  useEffect(() => {
    FetchData.GetKodeEtik().then(async (res) => {
      try {
        setLoading(false);

        const fileUrl = `${process.env.NEXT_PUBLIC_URL}storage/${res?.file_path}`;
        setPdfUrl(fileUrl); // langsung pakai URL server

      } catch (err) {
        console.error("Error ambil PDF:", err);
      }
    });
  }, [setLoading]);

  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb
        title="Kode Etik"
        subtitle="Struktur Organisasi"
       images={images}
      />

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
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        ) : (
          <p>Loading PDF...</p>
        )}
      </div>

      <FooterTwo />
    </Wrapper>
  );
};

export default KodeEtik;
