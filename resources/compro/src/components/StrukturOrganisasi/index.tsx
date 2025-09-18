"use client";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterOne";
import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";

const Aboutus = () => {
        const images = [
        "/assets/images/hero/hero-01.png",
        "/assets/images/hero/hero-02.jpg",
        "/assets/images/hero/hero-01.png",
    ];


      const setLoading = useLoading((state) => state.setLoading);
        const [image, setImage] = useState<any>()

          useEffect(() => {
    FetchData.GetStrukturOrganisasi().then(async (res) => {
      try {
        setLoading(false);

        const fileUrl = `${process.env.NEXT_PUBLIC_URL}storage/${res?.image}`;
        setImage(fileUrl); // langsung pakai URL server

      } catch (err) {
        console.error("Error ambil PDF:", err);
      }
    });
  }, [setLoading]);


  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb
        title="Struktur Organisasi"
        subtitle="Struktur Organisasi"
       images={images}
      />
      <div
        className="container"
        style={{
        //   height: "100vh",
        //   display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px auto",
        }}
      >
        <img
          src={image} // ganti path sesuai file kamu di public/
          alt="Struktur Organisasi"
          style={{
            width: "100%",
            // height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <FooterTwo />
    </Wrapper>
  );
};

export default Aboutus;
