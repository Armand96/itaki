
import Breadcrumb from '@/common/Breadcrumb'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper'
import CtaHomeTwo from '../homes/home-2/CtaHomeTwo'
import FooterTwo from '@/layouts/footers/FooterTwo'
import CareerArea from './CareerArea'
import JobListArea from './JobListArea'
 

export default function Career() {
  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title="Career" subtitle="Career" bg_img="career-breadcrumb-bg" />
      <CareerArea />
      <JobListArea />
      <CtaHomeTwo />
      <FooterTwo />
    </Wrapper>
  )
}
