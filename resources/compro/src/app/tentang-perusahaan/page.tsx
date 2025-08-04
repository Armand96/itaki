import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Tentang Perusahaan",
};

const TentangPerusahaan = dynamic(() => import('@/components/TentangPerusahaan'), {
  ssr: true,
  loading: () => <Loading />
});

export default function Page() {
  return <TentangPerusahaan />;
}
