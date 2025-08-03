
import socialLinksFooter from '@/data/socialLinksFooter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



// images import   
import logo_white1_img from "@/assets/images/logo/logo-white1.svg";
import location_img from "@/assets/images/iconbox/location.svg";
import mail_img from "@/assets/images/iconbox/mail.svg";
import call_img from "@/assets/images/iconbox/call.svg";
import clock_img from "@/assets/images/iconbox/clock.svg";

export default function FooterOne() {
  return (
    <>
      <footer className="luminix-footer-section1">
        <div className="container">
          <div className="luminix-footer-one">
            <div className="row">
              <div className="col-xxl-4 col-xl-6 col-md-6">
                <div className="luminix-footer-textarea">
                  <Link href="/">
                    <Image width={139} height={60} src={logo_white1_img} alt="here is theme image" />
                  </Link>
                  <p>To achieve sustainable growth and success, we run businesses that must consistently adapt to competitive innovations, operational efficiencies and client-centric strategies.</p>
                  <div className="luminix-social-wrap wrap2">
                    <ul>
                      {socialLinksFooter.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href} target="_blank" dangerouslySetInnerHTML={{ __html: link.svg }}>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-6 col-md-6">
                <div className="luminix-footer-menu ml-15 ml-50">
                  <div className="luminix-footer-title">
                    <h5>Our Services</h5>
                  </div>
                  <ul>
                    <li>
                      <Link href="/about-us">Business Strategy</Link>
                    </li>
                    <li>
                      <Link href="/single-service">Customer Experience</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Financial Advices</Link>
                    </li>
                    <li>
                      <Link href="/team">Business Planning</Link>
                    </li>
                    <li>
                      <Link href="/blog">Manage Investment</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-md-6">
                <div className="luminix-footer-menu2 ml-24">
                  <div className="luminix-footer-title">
                    <h5>Contact Info</h5>
                  </div>
                  <ul>
                    <li>
                      <Image width={22} height={25} src={location_img} alt="here is theme image" />
                      42 Mamnoun Streek, UK
                    </li>
                    <li>
                      <a href="mailto:name@email.com">
                        <Image width={25} height={21} src={mail_img} alt="here is theme image" />
                        support.bandco@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+088">
                        <Image width={24} height={25} src={call_img} alt="here is theme image" />
                        +088-748-7888
                      </a>
                    </li>
                    <li>
                      <Image width={25} height={26} src={clock_img} alt="here is theme image" />
                      Mon - Sat: 10.00 - 18.00
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-md-6">
                <div className="luminix-footer-menu2 ml-50 mb-0">
                  <div className="luminix-footer-title">
                    <h5>Newsletter</h5>
                  </div>
                  <div className="luminix-subscription-field">
                    <p>Stay updated with our latest news</p>
                    <form>
                      <input type="email" placeholder="Your Email Address" />
                      <button className="subcription-btn2 pill" type="submit">Subscribe now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="luminix-footer-bottom-text">
            <p>© Copyright {new Date().getFullYear()} <span id="current-year"></span>, All Rights Reserved by WebArwa</p>
          </div>
        </div>
      </footer>
    </>
  )
}
