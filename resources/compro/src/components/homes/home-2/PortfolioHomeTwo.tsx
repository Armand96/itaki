
import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// images import  
import p1_img from "@/assets/images/portfolio/p1.png";
import p2_img from "@/assets/images/portfolio/p2.png";
import p3_img from "@/assets/images/portfolio/p3.png";
import p4_img from "@/assets/images/portfolio/p4.png";
import p5_img from "@/assets/images/portfolio/p5.png";

 

export default function PortfolioHomeTwo() {
  return (
    <>
      <div className="luminix-padding-section4 light-bg1">
        <div className="container">
          <div className="luminix-section-title">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <h6>Latest Work</h6>
                <h2 className="title pb-0 ml-20">We're passionate about our work</h2>
              </div>
              <div className="col-xl-5 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="luminix-title-btn">
                  <Link href="/portfolio" className="luminix-default-btn extra-btn3">View All Portfolio</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="luminix-p-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="luminix-p-thumb">
                  <Image width={636} height={450} src={p1_img} alt="here is theme image" />
                  <div className="luminix-p-content">
                    <h5>Market Analysis </h5>
                    <div className="luminix-p-btn">
                      <Link href="/single-portfolio">
                        <RightArrawWhitIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="luminix-p-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="luminix-p-thumb">
                  <Image width={636} height={450} src={p2_img} alt="here is theme image" />
                  <div className="luminix-p-content">
                    <h5>Company</h5>
                    <div className="luminix-p-btn">
                      <Link href="/single-portfolio">
                        <RightArrawWhitIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="luminix-p-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="luminix-p-thumb">
                  <Image width={416} height={450} src={p3_img} alt="here is theme image" />
                  <div className="luminix-p-content">
                    <h5>Area Analysis </h5>
                    <div className="luminix-p-btn">
                      <Link href="/single-portfolio">
                        <RightArrawWhitIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="luminix-p-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="luminix-p-thumb">
                  <Image width={416} height={450} src={p4_img} alt="here is theme image" />
                  <div className="luminix-p-content">
                    <h5>Development</h5>
                    <div className="luminix-p-btn">
                      <Link href="/single-portfolio">
                        <RightArrawWhitIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="luminix-p-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="luminix-p-thumb">
                  <Image width={416} height={450} src={p5_img} alt="here is theme image" />
                  <div className="luminix-p-content">
                    <h5>Support US</h5>
                    <div className="luminix-p-btn">
                      <Link href="/single-portfolio">
                        <RightArrawWhitIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
