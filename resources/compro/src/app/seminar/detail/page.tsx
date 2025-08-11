import dynamic from "next/dynamic";
import Loading from "../../loading";


const Seminar = dynamic(() => import('@/components/detailSeminar'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Seminar />;
}
