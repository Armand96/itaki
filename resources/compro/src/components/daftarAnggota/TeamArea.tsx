"use client"
import socialLinks from "@/data/socialLinks";
import team_data from "@/data/team-data";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";

const wilayahOptions = [
    { value: "semua", label: "Semua Wilayah" },
    { value: "jakarta", label: "Jakarta" },
    { value: "bandung", label: "Bandung" },
    { value: "surabaya", label: "Surabaya" },
];



const TeamArea = () => {
    const [wilayah, setWilayah] = useState<any>(null);
    const [searchName, setSearchName] = useState("");

    // Filter data berdasarkan wilayah dan nama
    const filteredTeam = team_data.filter((member) => {
        const matchWilayah =
            !wilayah || wilayah.value === "semua" || member?.wilayah === wilayah.value;
        const matchName = member.name
            .toLowerCase()
            .includes(searchName.toLowerCase());
        return matchWilayah && matchName;
    });



    return (
        <div className="luminix-padding-section4">
            <div className="container">
                <div className="luminix-section-title center">
                    <h2>Daftar Anggota</h2>
                </div>

                {/* Filter Section */}
                <div
                    className="filter-wrapper d-flex justify-content-center align-items-center mb-4 flex-wrap"
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        overflow: "hidden",
                        maxWidth: "420px",
                        margin: "0 auto",
                    }}
                >
                    {/* Dropdown */}
                    <div style={{ flex: "1 1 50%", minWidth: "150px" }}>
                        <Select
                            options={wilayahOptions}
                            value={wilayah}
                            onChange={setWilayah}
                            placeholder="Wilayah"
                            isClearable
                            menuPortalTarget={document.body} // pindahkan dropdown ke body
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    border: "none",
                                    boxShadow: "none",
                                    minHeight: "38px",
                                }),
                                menuPortal: (base) => ({ ...base, zIndex: 9999 }), // pastikan di atas semua elemen
                            }}
                        />
                    </div>

                    {/* Input */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nama Anggota"
                        style={{
                            flex: "1 1 50%",
                            border: "none",
                            height: "38px",
                            boxShadow: "none",
                        }}
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>


                <div className="row mt-5">
                    {filteredTeam.length ? (
                        filteredTeam.map((member, index) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={member.id}>
                                <div className="luminix-team-thumb">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={306}
                                        height={400}
                                    />
                                    <div className="luminix-team-content">
                                        <Link href="/single-team">
                                            <h5>{member.name}</h5>
                                        </Link>
                                        <p>{member.position}</p>
                                        <div className="luminix-team-social">
                                            <ul>
                                                {socialLinks.map((link, idx) => (
                                                    <li key={idx}>
                                                        <Link
                                                            href={link.href}
                                                            target="_blank"
                                                            dangerouslySetInnerHTML={{ __html: link.svg }}
                                                        ></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Tidak ada anggota ditemukan</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamArea;
