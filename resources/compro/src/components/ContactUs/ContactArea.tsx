 
import React from 'react'; 
import Image from 'next/image'; 
import ContactForm from '@/form/ContactForm';
 
// images import  
import contact2_img from "@/assets/images/contact-us/contact2.png";
import call_img from "@/assets/images/contact-us/call.svg";
import email_img from "@/assets/images/contact-us/email.svg";
import location_img from "@/assets/images/contact-us/location.svg"; 
 
export default function ContactArea() {
 

  return (
    <>
      <div className="luminix-padding-section4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="luminix-contact-us-thumb" data-aos="fade-up" data-aos-duration="700">
                <Image width={526} height={632} src={contact2_img} alt="here is theme image" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="luminix-contact-box">
                <div className="luminix-contact-title">
                  <h2 className="title pb-0 pt-0">Fill the form below:</h2>
                </div> 
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="luminix-contact-us-info-box">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap">
                  <div className="luminix-contact-us-info-icon">
                    <Image width={34} height={34} src={call_img} alt="here is theme image" />
                  </div>
                  <div className="luminix-contact-us-info-data">
                    <h5>Call Us</h5>
                    <a href="+088">+088-748-7888-999</a>
                    <a href="+123">+088-103-3914-999</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap">
                  <div className="luminix-contact-us-info-icon">
                    <Image width={39} height={30} src={email_img} alt="here is theme image" />
                  </div>
                  <div className="luminix-contact-us-info-data">
                    <h5>Send Email</h5>
                    <a href="mailto:name@gamil.com">support@gmail.com</a>
                    <a href="mailto:name@gamil.com">example@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap">
                  <div className="luminix-contact-us-info-icon">
                    <Image width={28} height={35} src={location_img} alt="here is theme image" />
                  </div>
                  <div className="luminix-contact-us-info-data">
                    <h5>Office Address</h5>
                    <span>42 Mamnoun Street,</span>
                    <span>Saba Carpet, UK</span>
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
