
import portfolio_img_1 from "@/assets/images/portfolio/p1.png";
import portfolio_img_2 from "@/assets/images/portfolio/p2.png";
import portfolio_img_3 from "@/assets/images/portfolio/p3.png";
import portfolio_img_4 from "@/assets/images/portfolio/p4.png";
import portfolio_img_5 from "@/assets/images/portfolio/p5.png";
import portfolio_img_7 from "@/assets/images/portfolio/p7.png";
import { StaticImageData } from "next/image";

interface PortfolioDataType {
    id: number;
    width: number;
    height: number;
    title: string;
    image: StaticImageData;
    href: string;
}[]

export const SertifikasiData:PortfolioDataType[] = [
  {
    id: 1,
    width: 606,
    height: 656,
    title: "Langkah Sertifikasi 2023",
    image: portfolio_img_1,
    href: "/single-portfolio",
  },
  {
    id: 2,
    width: 606,
    height: 656,
    title: "Langkah Sertifikasi 2024",
    image: portfolio_img_2,
    href: "/single-portfolio",
  },
  {
    id: 3,
    width: 606,
    height: 656,
    title: "Syarat yang dibutuhkan di Sertifikasi 2023",
    image: portfolio_img_3,
    href: "/single-portfolio",

  },
  {
    id: 4,
    width: 606,
    height: 656,
    title: "Langkah Sertifikasi 2023",
    image: portfolio_img_4,
    href: "/single-portfolio",
  },
  {
    id: 5,
    width: 606,
    height: 656,
    title: "Langkah Sertifikasi 2023",
    image: portfolio_img_5,
    href: "/single-portfolio",
  },
  {
    id: 6,
    width: 606,
    height: 429,
    title: "Langkah Sertifikasi 2023",
    image: portfolio_img_7,
    href: "/single-portfolio",
  },
];


export default SertifikasiData;
