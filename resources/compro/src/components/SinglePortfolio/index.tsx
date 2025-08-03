import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import SinglePortfolioArea from "./SinglePortfolioArea";


const SinglePortfolio = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Market Analysis" subtitle="Market Analysis" bg_img="singleportfolio-breadcrumb-bg" />
      <SinglePortfolioArea />
      <CtaHomeTwo />
      <FooterTwo />
    </Wrapper>
  );
};

export default SinglePortfolio;