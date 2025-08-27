import Image from 'next/image'
import React from 'react'

// images import
import about1 from "@/assets/images/blog/blog11.png";


export default function AboutArea({ dataList }: { dataList: any }) {
  return (
    <>
      <section className="luminix-padding-section">
        {/* === Sejarah (full layar) === */}
        <div className="container-fluid text-center mb-5 d-flex flex-column align-items-center justify-content-center">
          <h2 className="title pt-4">Sejarah</h2>
          {/* <p className="text4 mx-auto" style={{ maxWidth: "900px" }}>
            Perjalanan kami dimulai sejak tahun 2010 dengan tekad untuk menghadirkan solusi inovatif.
            Dalam lebih dari satu dekade, kami terus berkembang seiring dengan perubahan industri dan pasar,
            hingga kini mampu memberikan layanan yang lebih luas dan berdampak besar.
          </p> */}
          <div
            className="ql-editor col-lg-8"
            dangerouslySetInnerHTML={{ __html: dataList?.sejarah || "" }}
          />
        </div>

        {/* === Section Visi === */}
        <div className="container" style={{ marginTop: '80px' }}>
          <div className="row">
            {/* Image di kanan */}
            <div className="col-lg-6 order-lg-2 d-flex">
              <Image
                src="/assets/images/about-us/visi.jpg"
                width={600}
                height={400}
                style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
                alt="Visi"
                className="img-fluid w-full"
              />
            </div>

            {/* Konten di kiri */}
            <div className="col-lg-6">
              <div className="luminix-default-content">
                <h2 className="title pt-4">Visi</h2>
                {/* <p className="text4">
                  We started our journey in 2010. At the core of our approach is an understanding of the dynamic
                  nature of industries and markets.
                </p> */}
                                                          <div className="ql-editor"  dangerouslySetInnerHTML={{ __html:  dataList?.visi || "" }} />

              </div>
            </div>
          </div>
        </div>

          {/* === Section Misi === */}
        <div className="container" style={{ marginTop: '80px' }}>
          <div className="row">
            {/* Image di kanan */}
            <div className="col-lg-6 order-lg-0 d-flex">
              <Image
                width={600}
                height={400}
                src="/assets/images/about-us/misi.jpg"
                style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
                alt="Visi"
                className="img-fluid w-full"
              />
            </div>

            {/* Konten di kiri */}
            <div className="col-lg-6">
              <div className="luminix-default-content">
                <h2 className="title pt-4">Misi</h2>
                {/* <p className="text4">
                  We started our journey in 2010. At the core of our approach is an understanding of the dynamic
                  nature of industries and markets.
                </p> */}
                                                          <div className="ql-editor"  dangerouslySetInnerHTML={{ __html:  dataList?.misi || "" }} />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
