import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Tentang Perusahaan",
};

const WebBinar = dynamic(() => import('@/components/webinar'), {
  loading: () => <Loading />
});

export default function Page() {
  return <WebBinar />;
}
