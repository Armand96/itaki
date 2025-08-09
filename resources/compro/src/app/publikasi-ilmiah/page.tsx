import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Tentang Perusahaan",
};

const Regulasi = dynamic(() => import('@/components/publikasiIlmiah'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Regulasi />;
}
