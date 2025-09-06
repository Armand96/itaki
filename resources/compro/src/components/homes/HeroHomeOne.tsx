
"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function HeroHomeOne() {

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <>
      <div className="luminix-hero-section section luminix-here-bg">
        <div className="container">
          <div className="luminix-hero-content">
            <h5 data-aos="fade-up" data-aos-duration="700">ITAKI</h5>
            <h1 data-aos="fade-up" data-aos-duration="900" className="hero-title">Bersama kita berkembang</h1>
            <p data-aos="fade-up" data-aos-duration="1100" className="text">Selamat datang di ITAKI, organisasi kontruksi developer terbesar di indonesia</p>
          </div>
        </div>
      </div>
    </>
  )
}
