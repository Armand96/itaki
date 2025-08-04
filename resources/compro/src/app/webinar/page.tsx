import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Tentang Perusahaan",
};

const WebBinar = dynamic(() => import('@/components/webinar'), {
  ssr: true,
  loading: () => <Loading />
});

export default function Page() {
  return <WebBinar />;
}
