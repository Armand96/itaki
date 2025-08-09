"use client";
import portfolio_data from "@/data/Sertifikasi-data";
import RightArrawWhitIcon from "@/svg/RightArrawWhitIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function SkemaSertifikasi() {


  return (
    <>
      <div className="luminix-padding-section">
        <div className="container">
          <div className="luminix-section-title center">
            <h2>Sertifikasi</h2>

          </div>
          <div className="row luminix-portfolio-column" id="luminix-portfolio-grid">

            {portfolio_data.map((item) => (
              <div key={item.id} className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 collection-grid-item `}>
                <div className="luminix-p-wrap wrap2">
                  <div className="luminix-p-thumb">
                    <Image width={item.width} height={item.height} src={item.image} alt={item.title} />
                    <div className="luminix-p-content">
                      <h5>{item.title}</h5>
                      <div className="luminix-p-btn">
                        <Link href={item.href}>
                          <RightArrawWhitIcon />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}



          </div>
        </div>
      </div>
    </>
  )
}
