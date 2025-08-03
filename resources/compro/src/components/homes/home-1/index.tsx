 
import HeroHomeOne from "./HeroHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import ServiceHomeOne from "./ServiceHomeOne";
import WhyChooseHomeOne from "./WhyChooseHomeOne"; 
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import TeamHomeOne from "./TeamHomeOne";
import BlogHomeOne from "./BlogHomeOne";
import ContactHomeOne from "./ContactHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
 
 
const HomeOne = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <HeroHomeOne />
      <AboutHomeOne />
      <ServiceHomeOne />
      <WhyChooseHomeOne />
      <TestimonialHomeOne />
      <TeamHomeOne />
      <BlogHomeOne />
      <ContactHomeOne />
      <FooterOne />
    </Wrapper>
  );
};

export default HomeOne;