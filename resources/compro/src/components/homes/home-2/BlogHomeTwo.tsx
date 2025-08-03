 
import RightArrawSmallIcon from '@/svg/RightArrawSmallIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// images import  
import blog4_img from "@/assets/images/blog/blog4.png";
import icon1_img from "@/assets/images/blog/icon1.svg";
import date_img from "@/assets/images/blog/date.svg";
import blog5_img from "@/assets/images/blog/blog5.png"; 
import blog6_img from "@/assets/images/blog/blog6.png"; 

export default function BlogHomeTwo() {
  return (
    <>
  <div className="luminix-padding-section light-bg1">
    <div className="container">
      <div className="luminix-section-title">
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <h6>Our Latest News</h6>
            <h2 className="title pb-0 ml-20">Explore our latest blogs and news</h2>
          </div>
          <div className="col-xl-5 col-lg-4 d-flex align-items-center justify-content-end">
            <div className="luminix-title-btn">
              <Link href="/blog" className="luminix-default-btn extra-btn3">View All Post</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="luminix-blog-wrap2" data-aos="fade-up" data-aos-duration="700">
            <div className="luminix-blog-thumb2 thumb3">
              <Image width={636} height={339} src={blog4_img} alt="here is theme image" />
            </div>
            <div className="luminix-blog-content2">
              <div className="luminix-blog-meta">
                <Link href="/blog"><Image width={15} height={18} src={icon1_img} alt="here is theme image" />by admin</Link>
                <Link href="/blog"><Image width={15} height={16} src={date_img} alt="here is theme image" />July 5, 2024</Link>
              </div>
              <div className="title pt-0">
                <h5 className="blog-title"><Link href="/blog">5 tips for business leaders for a productive week</Link></h5>
              </div>
              <p>As a business leader, the way you begin your week sets the tone for the days ahead. Adopting positive habits and strategic planning can...</p>
              <div className="luminix-blog-btn">
                <Link href="/single-blog">Read More 
                  <RightArrawSmallIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="luminix-blog-wrap3" data-aos="fade-up" data-aos-duration="900">
            <div className="luminix-blog-thumb3">
              <Image width={306} height={283} src={blog5_img} alt="here is theme image" />
            </div>
            <div className="luminix-blog-content3">
              <div className="luminix-blog-meta">
                <Link href="/blog"><Image width={15} height={18} src={icon1_img} alt="here is theme image" />by admin</Link>
                <Link href="/blog"><Image width={15} height={16} src={date_img} alt="here is theme image" />July 3, 2024</Link>
              </div>
              <div className="title pt-0">
                <h5 className="blog-title"><Link href="/blog">How to start making 10x more money online</Link></h5>
              </div>
              <p>To start charging 10x more by next month, you need to stop selling..</p>
              <div className="luminix-blog-btn">
                <Link href="/single-blog">Read More
                 <RightArrawSmallIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="luminix-blog-wrap3" data-aos="fade-up" data-aos-duration="1100">
            <div className="luminix-blog-thumb3">
              <Image width={306} height={283} src={blog6_img} alt="here is theme image" />
            </div>
            <div className="luminix-blog-content3">
              <div className="luminix-blog-meta">
                <Link href="/blog"><Image width={15} height={18} src={icon1_img} alt="here is theme image" />by admin</Link>
                <Link href="/blog"><Image width={15} height={16} src={date_img} alt="here is theme image" />June 27, 2024</Link>
              </div>
              <div className="title pt-0">
                <h5 className="blog-title"><Link href="/blog">Caring team during the holiday season</Link></h5>
              </div>
              <p>The holiday season is a time for celebration, gratitude, and...</p>
              <div className="luminix-blog-btn">
                <Link href="/single-blog">Read More
                  <RightArrawSmallIcon />
                </Link>
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
