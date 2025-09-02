import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Seminar",
};

const Seminar = dynamic(() => import('@/components/seminar'), {
  loading: () => <Loading />
});

export default function Page() {
  return <Seminar />;
}
