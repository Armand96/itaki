
import RightArrawWhitIcon from '@/svg/RightArrawWhitIcon'
import Image from 'next/image'
import Link from 'next/link'


// images import
import about_img from "@/assets/images/about-us/about-01.png"
import icon1_img from "@/assets/images/about-us/icon1.svg"

export default function AboutHomeOne() {
  return (
    <>
      <div className="luminix-padding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="luminix-about-thumb" data-aos="fade-up" data-aos-duration="700">
                <Image width={500} height={520} src={about_img} alt="here is theme image" />
                <div className="luminix-about-card">
                  <h2 className="">12+</h2>
                  <h5>Years of experience</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="luminix-default-content">
                <h6>Tentang Kami</h6>
                <h2 className="title">We create unique business ideas</h2>
                <p className="text">Tailored strategies turn your vision into reality with innovative solutions. We focus on understanding your unique needs to provide customized business advice that sets you apart.</p>
                <div className="luminix-list-icon-content">
                  <ul>
                    <li>
                      <Image width={25} height={24} src={icon1_img} alt="here is theme image" />
                      Improve customer experience
                    </li>
                    <li>
                      <Image width={25} height={24} src={icon1_img} alt="here is theme image" />
                      Leverage digital marketing
                    </li>
                    <li>
                      <Image width={25} height={24} src={icon1_img} alt="here is theme image" />
                      Expand product or service range
                    </li>
                  </ul>
                </div>
                <div className="mt-50">
                  <Link href="/about-us" className="luminix-default-btn pill">About Us
                    <RightArrawWhitIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
