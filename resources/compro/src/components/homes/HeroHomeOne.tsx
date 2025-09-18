"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";

export default function HeroHomeOne() {
    //   useEffect(() => {
    //     AOS.init({
    //       duration: 1000,
    //       once: true,
    //     });
    //   }, []);

    const images = [
        "/assets/images/hero/hero-01.png",
        "/assets/images/hero/hero-02.jpg",
        "/assets/images/hero/hero-01.png",
    ];

    return (
        <div className="luminix-hero-section section position-relative">
            {/* Background Carousel */}
            <Carousel fade controls={false} indicators={false} interval={1000} >
                {images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                        <div
                            className="d-block w-100 carousel-hero-size"
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "80vh",
                                filter: "brightness(0.6)",
                            }}
                        ></div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Content Overlay */}
           <div
  className="container position-absolute top-50 start-50 translate-middle"
  style={{ zIndex: 9999 }}
>
  <div className="new-hero text-white text-center">
    <h5 className="mb-3" style={{ color: 'white'}}>ITAKI</h5>
    <h1>
      Membangun profesionalisme, memperkuat kompetensi, menumbuhkan kepercayaan,
      mewujudkan masa depan konstruksi yang lebih baik.
    </h1>
    <p className="mt-3">
      Ikatan Tenaga Ahli Konstruksi Indonesia (ITAKI) meyakini bahwa keahlian adalah
      fondasi pembangunan. Melalui sertifikasi yang terukur, diakui, serta
      pengembangan kompetensi berkelanjutan, ITAKI mendukung para profesional
      konstruksi untuk tumbuh, berkembang, dan berkontribusi nyata bagi negeri dengan
      hasil kerja yang berkualitas, aman, dan berkelanjutan.
    </p>
  </div>
</div>
        </div>
    );
}
