
import Count from '@/common/count'
import counter_data from '@/data/counter-data'
import Image from 'next/image'
import React from 'react'

// images import  
import about_img from "@/assets/images/about-us/about-01.png";
import author_img from "@/assets/images/about-us/author.png";
import icon2_img from "@/assets/images/about-us/icon2.svg"; 



export default function AboutCounterArea() {
  return (
    <>
      <div className="luminix-about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="luminix-about-thumb" data-aos="fade-up" data-aos-duration="700">
                <Image width={500} height={520} src={about_img} alt="here is theme image" />
                <div className="luminix-about-card3 card4">
                  <Image width={162} height={65} src={author_img} alt="here is theme image" />
                  <h6>The average rating is 4.8, making us the world's best business organization.</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="luminix-default-content pl-100">
                <h2 className="title2">We create unique business ideas</h2>
                <p className="text">Tailored strategies turn your vision into reality with innovative solutions. We focus on understanding your unique needs to provide customized business advice that sets you apart.</p>
                <div className="luminix-list-icon-content">
                  <ul>
                    <li>
                      <Image width={23} height={23} src={icon2_img} alt="here is theme image" />
                      Improve & grow customer experience
                    </li>
                    <li>
                      <Image width={23} height={23} src={icon2_img} alt="here is theme image" />
                      Leverage digital marketing strategies
                    </li>
                    <li>
                      <Image width={23} height={23} src={icon2_img} alt="here is theme image" />
                      Expand your product or service range
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="luminix-counter-wrap">
            {counter_data.map((item, i) => (
              <div className="luminix-counter-item" key={i}>
                <h2 className="luminix-counter-data">
                  <Count number={item.value} text={item.text} />                  
                </h2>
                <p>{item.label}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
