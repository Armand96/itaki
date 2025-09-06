"use client";
import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

interface StyleProps {
    style_2?: boolean;
}


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
    klien?: any;
}



export default function TestimonialHomeOne({ style_2, klien }: StyleProps) {
    return (
        <>
            <div className="luminix-padding-section3 light-bg1">
                <div className="container">
                    <div className="luminix-section-title center">
                        <h2 className="title">Klien Kami</h2>
                        <p className="text2"></p>
                    </div>
                </div>
                <div className={`${style_2 ? 'luminix-brand-section2' : 'luminix-brand-section'}`}>
                    <Slider {...settings} className="luminix-brand-slider-wrap">
                        {
                            [...(klien || []), ...(klien || [])].map((item: any, idx: number) => (
                                <div key={`${item.id}-${idx}`} className="luminix-brand-item">
                                    <Image
                                        width={230}
                                        height={190}
                                        src={`${process.env.NEXT_PUBLIC_URL}storage/${item?.image}`}
                                        alt={item.gambar?.alternativeText || "here is theme image"}
                                    />
                                </div>
                            ))
                        }

                        {/* <div className="luminix-brand-item">
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
                        </div> */}
                    </Slider>
                </div>
            </div>
        </>
    )
}
