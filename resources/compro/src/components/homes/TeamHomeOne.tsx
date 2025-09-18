import socialLinks from '@/data/socialLinks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// interface
interface StyleProps {
  style_2?: boolean;
    team?: any;
}


export default function TeamHomeOne({ style_2, team }: StyleProps) {
  return (
    <div className="luminix-padding-section4">
      <div className="container">
        <div className="luminix-section-title center">
          <h2 className="title">Tim Kami</h2>
          {/* <p className="text2">
            Kami sangat antusias dengan apa yang kami lakukan! Kenali anggota tim luar biasa kami yang mewujudkan semuanya.
          </p> */}
        </div>

        <div className="row">
          {team?.map((member, idx) => (
            <div key={idx} className="col-xl-3 col-lg-6 col-md-6">
              <div className="luminix-team-wrap"  data-aos-duration={member.delay}>
                <div className="luminix-team-thumb">
                  <Image width={306} height={400} style={{ objectFit: "cover", }}   src={member?.image ? `${process.env.NEXT_PUBLIC_URL}storage/${member?.image}` : "/assets/images/team/team1.png"} alt={member.nama} />
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
