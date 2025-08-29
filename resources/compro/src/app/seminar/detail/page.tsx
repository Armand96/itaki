import dynamic from "next/dynamic";
import Loading from "../../loading";


const Seminar = dynamic(() => import('@/components/detailKegiatan'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Seminar />;
}
