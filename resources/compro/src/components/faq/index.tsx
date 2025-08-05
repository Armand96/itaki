import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeTwo from "../homes/home-2/CtaHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import FaqArea from "./FaqArea";
 

export default function Faq() {
	return (
		<Wrapper>
			<HeaderOne />
      <Breadcrumb title="FAQs" subtitle="FAQs" bg_img="faq-breadcrumb-bg" />
      <FaqArea />
      <CtaHomeTwo />
      <FooterTwo />
		</Wrapper>
	);
}
