
import RightArrawIcon from '@/svg/RightArrawIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// images import  
import location_img from "@/assets/images/career/location.svg";
import clock_img from "@/assets/images/career/clock.svg"; 
 

export default function JobListArea() {
  return (
    <>
      <section className="luminix-padding-section9">
        <div className="container">
          <div className="luminix-section-title center max-width-700">
            <h2>Select your job from this open positions</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="luminix-career-wrap" data-aos="fade-up" data-aos-duration="500">
                <h5>Digital Marketing Manager</h5>
                <p>We’re seeking a digital marketing manager who thrives in a fast-paced, innovative environment.</p>
                <div className="luminix-career-content">
                  <ul>
                    <li>
                      <Image width={17} height={22} src={location_img} alt="here is theme image" />On-site
                    </li>
                    <li>
                      <Image width={20} height={20} src={clock_img} alt="here is theme image" />Full-time
                    </li>
                  </ul>
                </div>
                <div className="mt-50">
                  <Link href="/single-career" className="luminix-default-btn pill career-btn">Apply For This Position
                     
                    <RightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="luminix-career-wrap" data-aos="fade-up" data-aos-duration="700">
                <h5>UX/UI Designer</h5>
                <p>We’re looking for a UX/UI Designer who excels in creating intuitive, user-centric designs & enhance functionality.</p>
                <div className="luminix-career-content">
                  <ul>
                    <li>
                      <Image width={17} height={22} src={location_img} alt="here is theme image" />On-site
                    </li>
                    <li>
                      <Image width={20} height={20} src={clock_img} alt="here is theme image" />Remote
                    </li>
                  </ul>
                </div>
                <div className="mt-50">
                  <Link href="/single-career" className="luminix-default-btn pill career-btn">Apply For This Position
                    <RightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="luminix-career-wrap" data-aos="fade-up" data-aos-duration="900">
                <h5>Content Strategist</h5>
                <p>Do you have the words and skills for strategy? We're looking for a content strategist to craft engaging.</p>
                <div className="luminix-career-content">
                  <ul>
                    <li>
                      <Image width={17} height={22} src={location_img} alt="here is theme image" />On-site
                    </li>
                    <li>
                      <Image width={20} height={20} src={clock_img} alt="here is theme image" />Remote
                    </li>
                  </ul>
                </div>
                <div className="mt-50">
                  <Link href="/single-career" className="luminix-default-btn pill career-btn">Apply For This Position
                    <RightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="luminix-career-wrap" data-aos="fade-up" data-aos-duration="500">
                <h5>Social Media Manager</h5>
                <p>The social media manager will lead social media strategy, content creation, and community management for clients.</p>
                <div className="luminix-career-content">
                  <ul>
                    <li>
                      <Image width={17} height={22} src={location_img} alt="here is theme image" />On-site
                    </li>
                    <li>
                      <Image width={20} height={20} src={clock_img} alt="here is theme image" />Full-time
                    </li>
                  </ul>
                </div>
                <div className="mt-50">
                  <Link href="/single-career" className="luminix-default-btn pill career-btn">Apply For This Position
                    <RightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="luminix-career-wrap" data-aos="fade-up" data-aos-duration="700">
                <h5>Project Manager</h5>
                <p>As a project manager, you will oversee the end-to-end execution of creative projects skills are essential.</p>
                <div className="luminix-career-content">
                  <ul>
                    <li>
                      <Image width={17} height={22} src={location_img} alt="here is theme image" />On-site
                    </li>
                    <li>
                      <Image width={20} height={20} src={clock_img} alt="here is theme image" />Full-time
                    </li>
                  </ul>
                </div>
                <div className="mt-50">
                  <Link href="/single-career" className="luminix-default-btn pill career-btn">Apply For This Position
                    <RightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="luminix-career-wrap" data-aos="fade-up" data-aos-duration="900">
                <h5>Senior Graphic Designer</h5>
                <p>Are you a visionary with a passion for creating impactful visuals? We’re looking for a senior graphic designer.</p>
                <div className="luminix-career-content">
                  <ul>
                    <li>
                      <Image width={17} height={22} src={location_img} alt="here is theme image" />On-site
                    </li>
                    <li>
                      <Image width={20} height={20} src={clock_img} alt="here is theme image" />Full-time
                    </li>
                  </ul>
                </div>
                <div className="mt-50">
                  <Link href="/single-career" className="luminix-default-btn pill career-btn">Apply For This Position
                    <RightArrawIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
