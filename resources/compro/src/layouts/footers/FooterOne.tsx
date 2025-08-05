
import socialLinksFooter from '@/data/socialLinksFooter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



// images import
import logo_white1_img from "@/assets/images/logo/logo.png";
import location_img from "@/assets/images/iconbox/location.svg";
import mail_img from "@/assets/images/iconbox/mail.svg";
import call_img from "@/assets/images/iconbox/call.svg";

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
                    <Image width={200} height={200} src={logo_white1_img} alt="here is theme image" />
                  </Link>
                  {/* <p>To achieve sustainable growth and success, we run businesses that must consistently adapt to competitive innovations, operational efficiencies and client-centric strategies.</p> */}
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
              <div className="col-xxl-4 col-xl-6 col-md-6">
                <div className="luminix-footer-menu2 ml-24">
                  <div className="luminix-footer-title">
                    <h5>Temui kami di</h5>
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
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6 col-md-6">
                <div className="luminix-footer-menu2 ml-50 mb-0">
                  <div className="luminix-footer-title">
                    <h5>Maps</h5>
                  </div>
                  <div className="luminix-subscription-field">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2281.604530215675!2d106.89787305970734!3d-6.213541190080683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4a5a0f1df47%3A0x256f95253d9a3a62!2sKlender!5e1!3m2!1sid!2sid!4v1754321798666!5m2!1sid!2sid" style={{border: "0", width: "100%", height: "300px"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="luminix-footer-bottom-text">
            <p>© Copyright {new Date().getFullYear()} <span id="current-year"></span>, All Rights Reserved by itaki</p>
          </div>
        </div>
      </footer>
    </>
  )
}
