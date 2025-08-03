
"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon';

 

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
            <h5 data-aos="fade-up" data-aos-duration="700">[Welcome to Luminix]</h5>
            <h1 data-aos="fade-up" data-aos-duration="900" className="hero-title">Grow & manage your business</h1>
            <p data-aos="fade-up" data-aos-duration="1100" className="text">Welcome to luminix, a leading consulting firm with a strong history of excellence and innovation. With a passion for precision, efficiency and commitment to quality, we strive for outstanding service.</p>
            <div className="mt-50" data-aos="fade-up" data-aos-duration="700">
              <Link href="/service" className="luminix-default-btn pill luminix-hero-btn">View Our Services
                <RightArrawWhitIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
