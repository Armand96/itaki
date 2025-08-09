"use client";

import dynamic from "next/dynamic";
import Loading from "../loading";



const DaftarAnggota = dynamic(() => import('@/components/daftarAnggota'), {
  ssr: false,
  loading: () => <Loading />
});

export default function Page() {
  return <DaftarAnggota />;
}
