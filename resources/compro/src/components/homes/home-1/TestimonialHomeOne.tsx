"use client";
import React from 'react'
import Slider from 'react-slick'
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Image from 'next/image';

interface StyleProps {
  style_2?: boolean;
}



// images import  
import rating_img from "@/assets/images/v1/rating.svg";
import quote1_img from "@/assets/images/v1/quote1.svg";
import test2_img from "@/assets/images/v1/test2.png";  
import test1_img from "@/assets/images/v1/test1.png"; 
import test3_img from "@/assets/images/v1/test3.png";  
import test4_img from "@/assets/images/v1/test4.png";



export default function TestimonialHomeOne({style_2 }: StyleProps) {
  return (
    <>
      <div className="luminix-padding-section3 light-bg1">
        <div className="container">
          <div className="luminix-section-title center">
            {style_2 ?  null : <h6>[Client Reviews]</h6>}            
            <h2 className="title">Hear what our happy clients say</h2>
            <p className="text2">We have completed our projects seriously and have many positive client reviews that prove our expertise. Some of them are also mentioned here.</p>
          </div>
        </div>
        <Slider
          slidesToShow={3}
          slidesToScroll={1}
          arrows={false}
          autoplay={true}
          dots={true}
          centerMode={true}
          speed={500}          
          centerPadding="180px"
          lazyLoad="progressive"
          responsive={[
            {
              breakpoint: 1349,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                centerPadding: "100px",
              },
            },
            {
              breakpoint: 0,
              settings: {
                slidesToShow: 1,
                centerPadding: "0px",
              },
            },
          ]}
          className="luminix-testimonial-slider">
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image width={140} height={24} src={rating_img} alt="here is theme image" />
              <Image width={56} height={42} src={quote1_img} alt="here is theme image" />
            </div>
            <div className="luminix-t-content">
              <p>“Working with luminix was a game-changer for our company. Extremely recommended for businesses looking for transformative solutions.”</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <Image width={60} height={60} src={test2_img} alt="here is theme image" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Bonsey Johnson</h6>
                <p>Businessman</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image width={140} height={24} src={rating_img} alt="here is theme image" />
              <Image width={56} height={42} src={quote1_img} alt="here is theme image" />
            </div>
            <div className="luminix-t-content">
              <p>“Our experience was characterized by a results-driven approach that really made a difference. They are a reliable partner for driving success.”</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <Image width={60} height={60} src={test1_img} alt="here is theme image" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Daniel Turner</h6>
                <p>Founder@ XYZ Comapny</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image width={140} height={24} src={rating_img} alt="here is theme image" />
              <Image width={56} height={42} src={quote1_img} alt="here is theme image" />
            </div>
            <div className="luminix-t-content">
              <p>“Working with luminix was a game-changer for our company. Extremely recommended for businesses looking for transformative solutions.”</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <Image width={60} height={60} src={test3_img} alt="here is theme image" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Michael Ramirez</h6>
                <p>Director Of ZuBaz</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image width={140} height={24} src={rating_img} alt="here is theme image" />
              <Image width={56} height={42} src={quote1_img} alt="here is theme image" />
            </div>
            <div className="luminix-t-content">
              <p>“Working with luminix was a game-changer for our company. Extremely recommended for businesses looking for transformative solutions.”</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <Image width={60} height={60} src={test2_img} alt="here is theme image" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Bonsey Johnson</h6>
                <p>Businessman</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <Image width={140} height={24} src={rating_img} alt="here is theme image" />
              <Image width={56} height={42} src={quote1_img} alt="here is theme image" />
            </div>
            <div className="luminix-t-content">
              <p>"What impressed us the most about was their commitment to transparent communication. A trusted navigating complex business landscapes."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <Image width={60} height={60} src={test4_img} alt="here is theme image" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Rick Ferrari</h6>
                <p>Manager</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}
