
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ContactForm from '@/form/ContactForm';

// images import
import contact2_img from "@/assets/images/contact-us/contact2.png";
import call_img from "@/assets/images/contact-us/call.svg";
import email_img from "@/assets/images/contact-us/email.svg";
import location_img from "@/assets/images/contact-us/location.svg";
import FetchData from '../../../services/FetchData';
import useLoading from '@/store/useLoading';

export default function ContactArea() {
    const setLoading = useLoading((state) => state.setLoading);
    const [listData, setListData] = useState<any>()

        useEffect(() => {
        Promise.all([
            FetchData.GetWebSettings(),
        ]).then((res) => {
            setListData({
                webSettings: res[0]?.data,
            })
            setLoading(false);
        })
    }, [])



    return (
        <>
            <div className="luminix-padding-section4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-md-1">
                            <div className="luminix-contact-us-info-wrap">
                                <div className="luminix-contact-us-info-icon">
                                    <Image width={34} height={34} src={call_img} alt="here is theme image" />
                                </div>
                                <div className="luminix-contact-us-info-data">
                                    <h5>Kontak Kami</h5>
                                    <a
                                        href={`tel:${listData?.webSettings?.find((x: any) => x.name === "telp")?.value || ""}`}
                                    >
                                        {listData?.webSettings?.find((x: any) => x.name === "telp")?.value || ""}
                                    </a> </div>
                            </div>
                            <div className="colk">
                                <div className="luminix-contact-us-info-wrap">
                                        <Image width={39} height={30} src={email_img} alt="here is theme image" />
                                    <div className="luminix-contact-us-info-data">
                                        <h5>Email</h5>
                                        <a
                                                href={`mailto:${listData?.webSettings?.find((x: any) => x.name === "email")?.value || ""}`}
                                                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                                            >{listData?.webSettings?.find((x: any) => x.name === "email")?.value || ""}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="luminix-contact-us-info-wrap px-4">
                                        <Image width={28} height={35} src={location_img} alt="here is theme image" />
                                    <div className="luminix-contact-us-info-data" >
                                        <h5>Alamat</h5>
                                        <span> {listData?.webSettings?.filter((x: any) => x.name === "alamat")[0]?.value}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-md-2">
                            <div className="luminix-contact-box">
                                <div className="luminix-contact-title">
                                    <h4 className="pb-0 pt-0">Silahkan isi kontak dibawah ini :</h4>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
