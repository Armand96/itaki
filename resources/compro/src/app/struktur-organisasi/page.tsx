import dynamic from "next/dynamic";
import Loading from "../loading";

export const metadata = {
  title: "Tentang Perusahaan",
};

const StrukturOrganisasi = dynamic(() => import('@/components/StrukturOrganisasi'), {
  loading: () => <Loading />
});

export default function Page() {
  return <StrukturOrganisasi />;
}
