import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Tentang Perusahaan",
};

const Sertifikasi = dynamic(() => import('@/components/Sertifikasi'), {
  ssr: true,
  loading: () => <Loading />
});

export default function Page() {
  return <Sertifikasi />;
}
