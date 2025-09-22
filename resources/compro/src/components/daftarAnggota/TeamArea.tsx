"use client";
import useLoading from "@/store/useLoading";
import { useEffect, useState } from "react";
import FetchData from "../../../services/FetchData";

const TeamArea = () => {
    const setLoading = useLoading((state) => state.setLoading);
    const [searchName, setSearchName] = useState("");
    const [searchKta, setSearchKta] = useState("");
    const [result, setResult] = useState<any | null>(null);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const res = await FetchData.GetAnggota(
                `?nama=${searchName}&nomor_kta=${searchKta}`
            );
                setResult(res);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <div className="luminix-padding-section4">
            <div className="container">
                {/* Filter Section */}
                <div
                    className="filter-wrapper d-flex flex-column align-items-center mb-4"
                    style={{
                        maxWidth: "420px",
                        margin: "0 auto",
                    }}
                >
                    <input
                        type="text"
                        className="form-control mb-2 border px-4"
                        placeholder="NAMA ANGGOTA"
                        value={searchName}

                        onChange={(e) => setSearchName(e.target.value)}
                    />

                    {/* <input
                        type="text"
                        className="form-control mb-2 border px-4"
                        placeholder="NO KTA"
                        value={searchKta}

                        onChange={(e) => setSearchKta(e.target.value)}
                    /> */}

                    <button className="btn btn-primary mt-2" onClick={handleSearch}>
                        SEARCH
                    </button>

                </div>

                {/* Result Section */}
                <div className="row px-4 ">
                      {result ? (
                 result?.data?.map((item: any) => (
                       <div
                        className="mt-4 col-lg-6"
                        style={{
                            border: "1px solid #dcdcdc",
                            borderRadius: "8px",
                            padding: "20px",
                            maxWidth: "600px",
                            margin: "0 auto",
                            background: "#fff",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                            textAlign: "center",
                        }}
                    >
                        {/* Foto Anggota */}
                        {item.foto && (
                            <div className="mb-3">
                                <img
                                    src={item.foto}
                                    alt={item.nama}
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        objectFit: "cover",
                                        border: "2px solid #ccc",
                                    }}
                                />
                            </div>
                        )}

                        {/* Detail Anggota */}
                        <table style={{ width: "100%" }} className="table-anggota">
                            <tbody>
                                <tr>
                                    <td style={{ width: "180px", fontWeight: "bold", textAlign: 'left' }}>NAMA</td>
                                    <td style={{ width: "10px" }}>:</td>
                                    <td>{item.nama}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: "bold", textAlign: 'left' }}>JABATAN KERJA SAK</td>
                                    <td>:</td>
                                    <td>{item.jabatan}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: "bold", textAlign: 'left' }}>JENJANG</td>
                                    <td>:</td>
                                    <td>{item.jenjang}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: "bold", textAlign: 'left' }}>NOMOR KTA</td>
                                    <td>:</td>
                                    <td>{item.nomor_kta}</td>
                                </tr>
                                <tr>
                                    <td style={{ fontWeight: "bold", textAlign: 'left' }}>NO REGISTRASI</td>
                                    <td>:</td>
                                    <td>{item.nomor_registrasi}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                 ))
                ) : !result || !searchName ?  <p style={{ textAlign: 'center'}}>Silahkan Cari Anggota Berdasarkan Nama</p> : <p style={{ textAlign: 'center'}}>Data tidak ditemukan</p>}

                </div>
            </div>
        </div>
    );
};

export default TeamArea;
