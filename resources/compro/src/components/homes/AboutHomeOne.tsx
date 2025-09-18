
import Image from 'next/image'



export default function AboutHomeOne({ sambutan, team }: { sambutan: any, team: any }) {
    console.log(team)
    return (
        <>
            <div className="luminix-padding-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="luminix-about-thumb">
                                <Image width={450} height={600} className='img-responsive' style={{ objectFit: "cover", objectPosition: "top"}} src={`${process.env.NEXT_PUBLIC_URL}storage/${team?.filter((x: any) => x.urutan == 1)[0]?.image}`} alt="here is theme image" />
                                <div className="luminix-about-card">
                                    <h4 className="text-white">{team?.filter((x: any) => x.urutan == 1)[0]?.jabatan}</h4>
                                    <h5>{team?.filter((x: any) => x.urutan == 1)[0]?.nama}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="luminix-default-content">
                                {/* <h2 className="title">Sambutan Pimpinan</h2>
                                <p className="text">Sebagai Direktur dari ITAKI, saya merasa bangga dan terhormat dapat memperkenalkan organisasi kami kepada Anda. ITAKI didirikan dengan visi untuk menjadi kekuatan penggerak dalam dunia teknologi dan inovasi di Indonesia. Seiring berjalannya waktu, kami telah membangun kemitraan yang kuat dengan berbagai perusahaan dan organisasi, serta menciptakan peluang untuk para profesional di bidang teknologi.</p>
                                <p className="text">Kami berkomitmen untuk terus mendorong perkembangan riset, mengembangkan teknologi, dan memberikan kontribusi positif dalam dunia industri. Di ITAKI, kami percaya bahwa inovasi bukan hanya tentang kemajuan teknologi, tetapi juga tentang menciptakan solusi yang dapat meningkatkan kualitas hidup masyarakat secara keseluruhan.</p> */}
                                <div className="ql-editor"  dangerouslySetInnerHTML={{ __html: sambutan || "" }} />
                                {/* <div className="mt-50">
                                    <Link href="/visi-misi" className="luminix-default-btn pill">Selengkap nya
                                        <RightArrawWhitIcon />
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
