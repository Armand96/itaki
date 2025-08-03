"use client";
import PaginationLeftIcon from '@/svg/PaginationLeftIcon';
import PaginationRightIcon from '@/svg/PaginationRightIcon';
import RightArrawSmallIcon from '@/svg/RightArrawSmallIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


// images import  
import blog4_img from "@/assets/images/blog/blog4.png";
import icon1_img from "@/assets/images/blog/icon1.svg";
import date_img from "@/assets/images/blog/date.svg";
import blog10_img from "@/assets/images/blog/blog10.png";  
import blog9_img from "@/assets/images/blog/blog9.png";  
import line1_img from "@/assets/images/blog/line1.svg";
import line3_img from "@/assets/images/blog/line3.svg";
import blog11_img from "@/assets/images/blog/blog11.png"; 
import blog12_img from "@/assets/images/blog/blog12.png"; 
import blog13_img from "@/assets/images/blog/blog13.png"; 
import line2_img from "@/assets/images/blog/line2.svg";

 



export default function BlogArea() {
  return (
    <>
  <div className="luminix-padding-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="luminix-blog-wrap2 wrap4 mr-30" data-aos="fade-up" data-aos-duration="500">
            <div className="luminix-blog-thumb2">
              <Image width={824} height={500} src={blog4_img} alt="here is theme image" />
            </div>
            <div className="luminix-blog-content2">
              <div className="luminix-blog-meta">
                <Link href="/blog"><Image width={15} height={18} src={icon1_img} alt="here is theme image" />by admin</Link>
                <Link href="/blog"><Image width={15} height={16} src={date_img} alt="here is theme image" />July 5, 2024</Link>
              </div>
              <div className="title pt-0">
                <h3 className="blog-title"><Link href="/single-blog">5 Tips for a productive week in business</Link></h3>
              </div>
              <p>As a business leader, the way you begin your week sets the tone for the days ahead. Adopting positive habits and strategic planning can significantly impact your...</p>
              <div className="luminix-blog-btn">
                <Link href="/single-blog">Read More
                  <RightArrawSmallIcon /> 
                </Link>
              </div>
            </div>
          </div>
          <div className="luminix-blog-wrap2 wrap4 mr-30" data-aos="fade-up" data-aos-duration="700">
            <div className="luminix-blog-thumb2">
              <Image width={824} height={500} src={blog10_img} alt="here is theme image" />
            </div>
            <div className="luminix-blog-content2">
              <div className="luminix-blog-meta">
                <Link href="/blog"><Image width={15} height={18} src={icon1_img} alt="here is theme image" />by admin</Link>
                <Link href="/blog"><Image width={15} height={16} src={date_img} alt="here is theme image" />July 3, 2024</Link>
              </div>
              <div className="title pt-0">
                <h3 className="blog-title"><Link href="/single-blog">How to make 10x more money online</Link></h3>
              </div>
              <p>If you currently earn money from your blog from ads & affiliates then the most obvious way to 10x your blog income is by 10x-ing your traffic. For example, if you...</p>
              <div className="luminix-blog-btn">
                <Link href="/single-blog">Read More
                  <RightArrawSmallIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="luminix-blog-wrap2 wrap4 mr-30" data-aos="fade-up" data-aos-duration="900">
            <div className="luminix-blog-thumb2">
              <Image width={824} height={500} src={blog9_img} alt="here is theme image" />
            </div>
            <div className="luminix-blog-content2">
              <div className="luminix-blog-meta">
                <Link href="/blog"><Image width={15} height={18} src={icon1_img} alt="here is theme image" />by admin</Link>
                <Link href="/blog"><Image width={15} height={16} src={date_img} alt="here is theme image" />July 27, 2024</Link>
              </div>
              <div className="title pt-0">
                <h3 className="blog-title"><Link href="/single-blog">Caring team during the holiday season</Link></h3>
              </div>
              <p>The holiday season is a time for celebration, gratitude, and, most importantly, showing that you care. As a business leader, demonstrating your appreciation...</p>
              <div className="luminix-blog-btn">
                <Link href="/single-blog">Read More
                  <RightArrawSmallIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="luminix-pagination center">
            <Link className="pagi-btn btn2" href="/single-blog"> 
              <PaginationLeftIcon />
            </Link>
            <ul>
              <li><Link className="current" href="#">1</Link></li>
              <li><Link href="/single-blog">2</Link></li>
              <li><Link href="/single-blog">3</Link></li>
            </ul>
            <Link className="pagi-btn" href="/single-blog"> 
              <PaginationRightIcon />
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="luminix-blog-sidebar">
            <div className="luminix-blog-widgets">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="luminix-search-box">
                  <input type="search" placeholder="Type to search..." />
                  <button id="luminix-search-btn" type="button"><i className="ri-search-line"></i></button>
                </div>
              </form>
            </div>
            <div className="luminix-blog-widgets">
              <h5>Blog Categories</h5>
              <Image width={191} height={2} className="line" src={line1_img} alt="here is theme image" />
              <div className="luminix-blog-categorie">
                <ul>
                  <li><Link href="/single-blog">Uncategorized (78)</Link></li>
                  <li><Link href="/single-blog">Technology (05)</Link></li>
                  <li><Link href="/single-blog">Business & Marketing (23)</Link></li>
                  <li><Link href="/single-blog">Digital Agency (10)</Link></li>
                </ul>
              </div>
            </div>
            <div className="luminix-blog-widgets">
              <h5>Recent Posts</h5>
              <Image width={155} height={2} className="line" src={line3_img} alt="here is theme image" />
              <Link className="luminix-recent-post-item pt-15" href="/single-blog">
                <div className="luminix-recent-post-thumb">
                  <Image width={150} height={100}  src={blog11_img} alt="here is theme image" />
                </div>
                <div className="luminix-recent-post-data">
                  <span> <Image width={15} height={16} src={date_img} alt="here is theme image" />July 5, 2024</span>
                  <div className="blog">
                    <h6>Six ‘what ifs’ that could transformdigital agency</h6>
                  </div>
                </div>
              </Link>
              <Link className="luminix-recent-post-item" href="/single-blog">
                <div className="luminix-recent-post-thumb">
                  <Image width={150} height={100} src={blog12_img} alt="here is theme image" />
                </div>
                <div className="luminix-recent-post-data">
                  <span> <Image width={15} height={16} src={date_img} alt="here is theme image" /> July 3, 2024</span>
                  <div className="blog">
                    <h6>Case story: How to the design avatar generator</h6>
                  </div>
                </div>
              </Link>
              <Link className="luminix-recent-post-item" href="/single-blog">
                <div className="luminix-recent-post-thumb">
                  <Image width={150} height={100} src={blog13_img} alt="here is theme image" />
                </div>
                <div className="luminix-recent-post-data">
                  <span> <Image width={15} height={16} src={date_img} alt="here is theme image" />June 27, 2024</span>
                  <div className="blog">
                    <h6>Build a digital agency website in 4 easy steps</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div className="luminix-blog-widgets">
              <h5>Tags</h5>
              <Image width={56} height={2} className="line" src={line2_img} alt="here is theme image" />
              <div className="luminix-blog-tags">
                <ul>
                  <li><Link href="/single-blog">Business</Link></li>
                  <li><Link href="/single-blog">Digital</Link></li>
                  <li><Link href="/single-blog">IT Solution</Link></li>
                  <li><Link href="/single-blog">Technology</Link></li>
                  <li><Link href="/single-blog">Agency</Link></li>
                  <li><Link href="/single-blog">Digital</Link></li>
                </ul>
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
