import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Kode Etik",
};


const KodeEtik = dynamic(() => import('@/components/KodeEtik'), {
  loading: () => <Loading />,
});

export default function Page() {
  return <KodeEtik />;
}
