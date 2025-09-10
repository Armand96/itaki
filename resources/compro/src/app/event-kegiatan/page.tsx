import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Event Kegiatan",
};

const Seminar = dynamic(() => import('@/components/EventKegiatan'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Seminar />;
}
