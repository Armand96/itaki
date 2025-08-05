

import HeroHomeOne from "./HeroHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import TeamHomeOne from "./TeamHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";


const HomeOne = () => {
    return (
        <Wrapper>
            <HeaderOne />
            <HeroHomeOne />
            <AboutHomeOne />
            <TeamHomeOne />
            <TestimonialHomeOne />
            <FooterOne />
        </Wrapper>
    );
};

export default HomeOne;
