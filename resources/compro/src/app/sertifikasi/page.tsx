import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Sertifikasi",
};

const Sertifikasi = dynamic(() => import('@/components/Sertifikasi'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Sertifikasi />;
}
