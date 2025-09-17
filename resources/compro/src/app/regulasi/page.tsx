import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Regulasi",
};

const Regulasi = dynamic(() => import('@/components/regulasi'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Regulasi />;
}
