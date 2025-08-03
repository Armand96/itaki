"use client"
import VideoPopup from '@/modals/video-popup'
import Image from 'next/image';
import React, { useState } from 'react'

// images import  
import thumb_img from "@/assets/images/v1/thumb-03.png";
import play_img from "@/assets/images/v2/play-btn1.svg";

export default function WhyChooseHomeOne() {

    const [isVideoOpen, setIsVideoOpen] = useState(false);
  


  return (
    <>
      <div className="luminix-padding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <div className="luminix-video-thumb">
                <Image width={526} height={550} src={thumb_img} alt="here is theme image" />
                <a className="luminix-popup-video video-init" 
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}>
                   <Image width={100} height={100} src={play_img} alt="here is theme image" />
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="luminix-default-content">
                <h6>[Why Choose Us]</h6>
                <h2 className="title">We make creative plans for business</h2>
                <p className="text">Consulting solutions for business growth is a phrase that most likely refers to a service offering that provides expert advice & strategies to expand.</p>
                <div className="luminix-skill-wrap mt-50">
                  <div className="luminix-skill-item">
                    <div className="luminix-skill-title">
                      <h5>Leadership</h5>
                    </div>
                    <div className="luminix-skill-line">
                      <div className="luminix-skill-bar bar-one"></div>
                    </div>
                  </div>
                  <div className="luminix-skill-item">
                    <div className="luminix-skill-title">
                      <h5>Marketing</h5>
                    </div>
                    <div className="luminix-skill-line2">
                      <div className="luminix-skill-bar2 bar-two"></div>
                    </div>
                  </div>
                  <div className="luminix-skill-item">
                    <div className="luminix-skill-title">
                      <h5>Problem Solving</h5>
                    </div>
                    <div className="luminix-skill-line2">
                      <div className="luminix-skill-bar2 bar-three"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}


    </>
  )
}
