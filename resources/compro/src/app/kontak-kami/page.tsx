import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Kontak Kami",
};

const Contactus = dynamic(() => import('@/components/ContactUs'), {
  loading: () => <Loading />,
  ssr: true,
});

export default function Index() {
  return <Contactus />;
}
