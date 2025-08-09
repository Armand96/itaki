import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Tentang Perusahaan",
};

const Galeri = dynamic(() => import('@/components/galeri'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Galeri />;
}
