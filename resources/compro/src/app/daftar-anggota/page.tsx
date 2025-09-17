
import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Daftar Anggota",
};

const DaftarAnggota = dynamic(() => import('@/components/daftarAnggota'), {
  ssr: true,
  loading: () => <Loading />
});

export default function Page() {
  return <DaftarAnggota />;
}
