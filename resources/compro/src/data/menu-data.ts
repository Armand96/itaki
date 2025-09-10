

const menu_data = [
    // {
    //     title: "Demo",
    //     has_dropdown: true,
    //     link: "#",
    //     sub_menus: [
    //         { link: "/", title: "Home Page 01" },
    //         { link: "/home-2", title: "Home Page 02" },
    //         { link: "/home-3", title: "Home Page 03" },
    //     ],
    // },
    // {
    //     title: "Pages",
    //     has_dropdown: true,
    //     link: "#",
    //     sub_menus: [
    //         { title: "About Us", link: "/about-us", has_inner_dropdown: false },
    //         { title: "Pricing", link: "/pricing", has_inner_dropdown: false },
    //         { title: "Testimonial", link: "/testimonial", has_inner_dropdown: false },
    //         {
    //             title: "Team",
    //             has_inner_dropdown: true,
    //             link: "#",
    //             sub_menus: [
    //                 { title: "Team", link: "/team" },
    //                 { title: "Team Details", link: "/single-team" },
    //             ],
    //         },
    //         {
    //             title: "Service",
    //             has_inner_dropdown: true,
    //             link: "#",
    //             sub_menus: [
    //                 { title: "Service", link: "/service" },
    //                 { title: "Service Details", link: "/single-service" },
    //             ],
    //         },
    //         {
    //             title: "Career",
    //             has_inner_dropdown: true,
    //             link: "#",
    //             sub_menus: [
    //                 { title: "Career", link: "/career" },
    //                 { title: "Career Details", link: "/single-career" },
    //             ],
    //         },
    //         {
    //             title: "Utility",
    //             has_inner_dropdown: true,
    //             link: "#",
    //             sub_menus: [
    //                 { title: "FAQ", link: "/faq" },
    //                 { title: "Error 404", link: "/errors-404" },
    //                 { title: "Cooming Soon", link: "/cooming-soon" },
    //                 { title: "Term & Condition", link: "/term-condition" },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     title: "Portfolio",
    //     has_dropdown: true,
    //     link: "#",
    //     sub_menus: [
    //         { title: "Portfolio", link: "/portfolio" },
    //         { title: "Portfolio Details", link: "/single-portfolio" },
    //     ],
    // },
    // {
    //     title: "Blog",
    //     has_dropdown: true,
    //     link: "#",
    //     sub_menus: [
    //         { title: "Blog", link: "/blog" },
    //         { title: "Blog Details", link: "/single-blog" },
    //     ],
    // },
    // {
    //     title: "Contact Us",
    //     has_dropdown: false,
    //     link: "/contact-us",
    // },
    {
        title: "Home", link: "/",
    },
     {
        title: "Tentang Kami",
        has_dropdown: true,
        link: "#",
        sub_menus: [
            { link: "/visi-misi", title: "Visi & Misi" },
            { link: "/kode-etik", title: "Kode Etik" },
            { link: "/struktur-organisasi", title: "Struktur Organisasi" },
        ],
    },
     {
        title: "Regulasi", link: "/regulasi",
    },
     {
        title: "Publikasi", link: "/publikasi-ilmiah",
    },
    {
        title: "Keanggotaan & Sertifikasi",
        has_dropdown: true,
        link: "#",
        sub_menus: [
            { link: "/daftar-anggota", title: "List Anggota" },
            { link: "/sertifikasi", title: "Skema Sertifikasi" },
        ],
    },


    {
        title: "Kegiatan",
        has_dropdown: true,
        link: "#",
        sub_menus: [
            { link: "/event-kegiatan", title: "Event Kegiatan" },
             {link: "/galleri",  title: "Galleri"},
        ],
    },

];

export default menu_data;
