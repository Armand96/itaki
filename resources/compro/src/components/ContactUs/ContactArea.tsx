
import React from 'react';
import Image from 'next/image';
import ContactForm from '@/form/ContactForm';

// images import
import contact2_img from "@/assets/images/contact-us/contact2.png";
import call_img from "@/assets/images/contact-us/call.svg";
import email_img from "@/assets/images/contact-us/email.svg";
import location_img from "@/assets/images/contact-us/location.svg";

export default function ContactArea() {


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
                                    <a href="+088">+088-748-7888-999</a>
                                    <a href="+123">+088-103-3914-999</a>
                                </div>
                            </div>
                            <div className="colk">
                                <div className="luminix-contact-us-info-wrap">
                                        <Image width={39} height={30} src={email_img} alt="here is theme image" />
                                    <div className="luminix-contact-us-info-data">
                                        <h5>Email</h5>
                                        <a href="mailto:name@gamil.com">support@gmail.com</a>
                                        <a href="mailto:name@gamil.com">example@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="luminix-contact-us-info-wrap px-4">
                                        <Image width={28} height={35} src={location_img} alt="here is theme image" />
                                    <div className="luminix-contact-us-info-data" >
                                        <h5>Alamat</h5>
                                        <span> Ruko Duren Sawit Center, Jl. Duren Sawit Raya (dermaga) No. 8 R,<br />
                                            RT.7/RW.10, Klender, Kec. Duren Sawit, Kota Jakarta Timur,<br />
                                            Daerah Khusus Ibukota Jakarta 13470</span>
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
