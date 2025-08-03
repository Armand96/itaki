"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image';


const settings = {
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  arrows: false,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1399,
    settings: {
      slidesToShow: 5
    }
  }, {
    breakpoint: 1199,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 0,
    settings: {
      slidesToShow: 2
    }
  }]
}

interface StyleProps {
  style_2?: boolean;
}


// images import   
import brand1_img from "@/assets/images/brand/brand1.svg";
import brand2_img from "@/assets/images/brand/brand2.svg";
import brand3_img from "@/assets/images/brand/brand3.svg";
import brand4_img from "@/assets/images/brand/brand4.svg";
import brand5_img from "@/assets/images/brand/brand5.svg";
 



export default function BrandHomeThree({style_2} : StyleProps) {
  return (
    <>
      <div className={`${style_2 ? 'luminix-brand-section2' : 'luminix-brand-section'}`}>
        <Slider {...settings} className="luminix-brand-slider-wrap">
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand1_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand2_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand3_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand4_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand5_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand4_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand3_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand2_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand3_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand4_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand5_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand4_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand3_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand2_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand3_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand4_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand5_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand4_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand3_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand2_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand3_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand4_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand5_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand4_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand3_img} alt="here is theme image" />
          </div>
          <div className="luminix-brand-item">
            <Image width={190} height={41} src={brand2_img} alt="here is theme image" />
          </div>
        </Slider>
      </div>
    </>
  )
}
