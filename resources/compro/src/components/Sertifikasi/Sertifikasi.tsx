"use client";
import useLoading from "@/store/useLoading";
import Image from "next/image";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";
import { Modal } from "react-bootstrap";

export default function SkemaSertifikasi() {
    const setLoading = useLoading((state) => state.setLoading);
    const [image, setImage] = useState<any>()
    const [listData, setListData] = useState<any>()
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    useEffect(() => {
        FetchData.GetSertifikasi().then(async (res) => {
            try {
                setLoading(false);

                const fileUrl = `${process.env.NEXT_PUBLIC_URL}storage/${res?.image}`;
                setImage(fileUrl); // langsung pakai URL server
                setListData(res)

            } catch (err) {
                console.error("Error ambil PDF:", err);
            }
        });
    }, [setLoading]);

    return (
        <>
            <div className="luminix-padding-section">
                <div className="container">

                    <h3 className="mx-auto text-center">Skema Sertifikasi</h3>

                    <div className="flex justify-center mb-12" style={{ display: "flex", justifyContent: "center" }}>
                        <Image
                            onClick={() => setShowModal(true)}
                            src={image}
                            alt="Skema Sertifikasi"
                            width={400}
                            height={400}
                            className="rounded-lg"
                            style={{ objectFit: "cover", margin: "30px auto", marginTop: "40px" }}
                        />
                    </div>

                    {/* Persyaratan */}
                    <div className="mt-8">
                        <div className="ql-editor" dangerouslySetInnerHTML={{ __html: listData?.description || "" }} />
                        {/* <h3 className="text-xl font-semibold mb-4">Persyaratan</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                            <span className="font-semibold">Pendidikan:</span> Gelar sarjana
                            atau setara dalam bidang terkait.
                        </li>
                        <li>
                            <span className="font-semibold">Pengalaman Kerja:</span> Minimal
                            3-5 tahun pengalaman dalam manajemen proyek.
                        </li>
                        <li>
                            <span className="font-semibold">Pelatihan:</span> Menyelesaikan
                            pelatihan atau kursus yang disetujui dalam manajemen proyek.
                        </li>
                        <li>
                            <span className="font-semibold">Ujian Sertifikasi:</span> Lulus
                            ujian sertifikasi yang meliputi pengetahuan tentang manajemen
                            proyek, teknik perencanaan, pengelolaan risiko, dan kontrol
                            anggaran.
                        </li>
                        <li>
                            <span className="font-semibold">Etika Profesional:</span> Mematuhi
                            standar etika yang ditetapkan oleh lembaga sertifikasi.
                        </li>
                    </ol> */}
                    </div>
                </div>
            </div>

            <Modal
                show={showModal}
                onHide={handleClose}
                centered
                size="xl"
                dialogClassName="modal-lg"
            >
                <Modal.Body className="p-0 text-center">
                    {image && (
                        <Image
                            src={image}
                            alt="Preview"
                            width={1920}
                            height={1080}
                            className="w-100 h-auto"
                            style={{ objectFit: "contain" }}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}
