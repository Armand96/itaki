 
import RightArrawWhitIcon from "@/svg/RightArrawWhitIcon";
import Image from "next/image";
import Link from "next/link";

// images import   
import career3_img from "@/assets/images/career/career3.png";
import location_img from "@/assets/images/career/location.svg";
import date_img from "@/assets/images/career/date.svg";
import clock_img from "@/assets/images/career/clock.svg";

 
export default function CareerDetailsArea() {
  return (
    <>
      <div className="luminix-padding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="luminix-career-single-thumb mr-30" data-aos="fade-up" data-aos-duration="700">
                <Image width={826} height={500} src={career3_img} alt="here is theme image" />
              </div>
              <div className="luminix-career-single-content mr-30">
                <p>Marketing manager responsibilities include tracking and analyzing the performance of advertising campaigns, managing the marketing budget and ensuring that all marketing material is in line with our brand identity.</p>
                <div className="luminix-career-single-data">
                  <h3>Responsibilities:</h3>
                  <ul>
                    <li>Develop strategies and tactics to get the word out about our company and drive qualified traffic to our front door</li>
                    <li>Deploy successful marketing campaigns and own their implementation from ideation to execution</li>
                    <li>Experiment with a variety of organic and paid acquisition channels like content creation, content curation, pay per click campaigns, event management, publicity, social media, lead generation campaigns, copywriting, performance analysis</li>
                    <li>Produce valuable and engaging content for our website and blog that attracts and converts our target groups</li>
                    <li>Build strategic relationships and partner with key industry players, agencies and vendors</li>
                  </ul>
                </div>
                <div className="luminix-career-single-data">
                  <h3>Requirements and skills:</h3>
                  <ul>
                    <li>Demonstrable experience in marketing together with the potential and attitude required to learn</li>
                    <li>Proven experience in identifying target audiences and in creatively devising and leading across channels marketing campaigns that engage, educate and motivate</li>
                    <li>Solid knowledge of website analytics tools (e.g., Google Analytics, NetInsight, Omniture, WebTrends)</li>
                    <li>Experience in setting up and optimizing Google Adwords campaigns</li>
                    <li>Numerically literate, comfortable working with numbers, making sense of metrics and processing figures with spreadsheets</li>
                  </ul>
                </div>
                <div className="luminix-career-single-data">
                  <h3>Job location:</h3>
                  <p>Marketing managers typically work in corporate environments. You'll find them in a variety of industries, such as health care, hospitality, finance, and technology.</p>
                </div>
                <div className="luminix-career-single-data pb-0">
                  <h3>Ready to join us?</h3>
                  <p>If you're eager to join a forward-thinking team as a Digital marketing manager, apply now! and let's start this digital journey together.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="luminix-career-single-sidebar">
                <h5 className="sidebar-title">Additional information</h5>
                <p>Your salary and required information are provided for this product designer role.</p>
                <ul>
                  <li><Image width={25} height={27} src={location_img} alt="here is theme image" />Brooklyn, New York</li>
                  <li><Image width={30} height={19} src={date_img} alt="here is theme image" />Salary: $14K-$20K</li>
                  <li><Image width={30} height={23} src={clock_img} alt="here is theme image" />Full Time</li>
                </ul>
                <Link href="/contact-us" className="luminix-default-btn pill d-block mt-24 luminix-main-field">Contact Me 
                  <RightArrawWhitIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
