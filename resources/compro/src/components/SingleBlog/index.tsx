import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import SingleBlogArea from "./SingleBlogArea";



const SingleBlog = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" bg_img="singleblog-breadcrumb-bg" />
      <SingleBlogArea />
      <CtaHomeTwo />
      <FooterTwo />
    </Wrapper>
  );
};

export default SingleBlog;