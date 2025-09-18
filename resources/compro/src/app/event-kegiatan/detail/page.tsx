import dynamic from "next/dynamic";
import Loading from "../../loading";

export const metadata = {
  title: "Detail Kegiatan",
};


const Seminar = dynamic(() => import('@/components/detailKegiatan'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Seminar />;
}
