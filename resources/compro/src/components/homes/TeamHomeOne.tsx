import socialLinks from '@/data/socialLinks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// interface
interface StyleProps {
  style_2?: boolean;
    team?: any;
}

interface TeamMember {
  name: string;
  role: string;
  image: any; // bisa pakai StaticImageData kalau mau ketat
  delay: number;
  hasSocial?: boolean;
}

// images import
import team1_img from "@/assets/images/direksi/1. Ketua Umum.jpg";
import team2_img from "@/assets/images/direksi/2. Direktur Eksekutif.png";
import team3_img from "@/assets/images/direksi/3. Direktur Keuangan.jpg";
import team4_img from "@/assets/images/direksi/4. Administrasi dan Manajemen.png";
import team5_img from "@/assets/images/direksi/5. Administrasi Sertifikasi.jpg";

const teamMembers: TeamMember[] = [
  { name: " HEBER LOLO SIMBOLON, ST, SE, M.Sc", role: "Ketua Umum", image: team1_img, delay: 500, hasSocial: false },
  { name: "  RIRIN M SIHOTANG, S. Ak", role: "   DIREKTUR EKSEKUTIF", image: team2_img, delay: 700, hasSocial: true },
  { name: " DERMAWATI SIMANJUNTAK, SE", role: "KEUANGAN", image: team3_img, delay: 900, hasSocial: true },
  { name: "", role: " ADMINISTRASI DAN MANAGEMENT", image: team4_img, delay: 1100, hasSocial: true },
    { name: "", role: " ADMINISTRASI DAN SERTIFIKASI", image: team5_img, delay: 1100, hasSocial: true },
];

export default function TeamHomeOne({ style_2, team }: StyleProps) {
  return (
    <div className="luminix-padding-section4">
      <div className="container">
        <div className="luminix-section-title center">
          {style_2 ? null : <h6>Tim Kami</h6>}
          <h2 className="title">Kenali Tim Hebat Kami</h2>
          <p className="text2">
            Kami sangat antusias dengan apa yang kami lakukan! Kenali anggota tim luar biasa kami yang mewujudkan semuanya.
          </p>
        </div>

        <div className="row">
          {team?.map((member, idx) => (
            <div key={idx} className="col-xl-3 col-lg-6 col-md-6">
              <div className="luminix-team-wrap" data-aos="fade-up" data-aos-duration={member.delay}>
                <div className="luminix-team-thumb">
                  <Image width={306} height={400} style={{ objectFit: "cover", }}  src={member?.image ? `${process.env.NEXT_PUBLIC_URL}storage/${member?.image}` : "/assets/images/team/team1.png"} alt={member.nama} />
                  <div className="luminix-team-content">
                      <h5 style={{ fontSize: "16px"}}>{member.nama}</h5>
                    <p>{member.jabatan}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
