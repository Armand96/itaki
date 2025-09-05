<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrestarterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // KATEGORI
        DB::insert("INSERT INTO `kategoris` VALUES (1, 'UU', 'Regulasi', '2025-08-17 11:46:52', '2025-08-17 11:46:52'), (2, 'Peraturan Pemerintah', 'Regulasi', '2025-08-17 11:48:54', '2025-08-17 11:48:54'),
        (3, 'Peraturan LPK', 'Regulasi', '2025-08-17 11:49:08', '2025-08-17 11:49:08'),
        (4, 'Kegiatan', 'Galleri', '2025-08-17 11:49:23', '2025-08-17 11:49:23');");

        // WEB SETTING
        DB::insert("INSERT INTO `web_settings` VALUES (1, 'alamat', 'text', 'Ruko Duren Sawit Center, Jl. Duren Sawit Raya (dermaga) No. 8 R   RT.7/RW.10, Klender, Kec. Duren Sawit, Kota Jakarta Timur,   Daerah Khusus Ibukota Jakarta 13470', '2025-08-18 16:08:02', '2025-08-29 14:18:23'),
        (2, 'email', 'text', 'test', '2025-08-29 14:03:59', '2025-08-29 14:03:59'),
        (3, 'telp', 'text', '1234', '2025-08-29 14:04:17', '2025-08-29 14:04:17'),
        (4, 'alamat_maps', 'text', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.1966717975447!2d106.9104643110313!3d-6.226632972546737!2m3!1f14.85127841696043!2f44.7536264577681!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x2e698cacea1ef84f%3A0xd71689c1e0d8040e!2sDPN%20ITAKI!5e1!3m2!1sid!2sid!4v1754411381419!5m2!1sid!2sid', '2025-08-29 14:22:24', '2025-08-29 14:22:24')");

        // POSTS
        DB::insert("INSERT INTO `posts` VALUES (1, 'Sambutan pimpinan', 'sambutan-pimpinan', 'home', NULL, 'Testzz', 1, '2025-08-17 11:23:04', '2025-08-17 11:23:04'),
        (2, 'List Klien', 'list-klien', 'home', NULL, 'Testzz', 1, '2025-08-17 11:23:19', '2025-08-17 11:23:19'),
        (3, 'Sejarah ITAKI', 'sejarah-itaki', 'tentangKami', NULL, 'Testzz', 1, '2025-08-17 12:36:29', '2025-08-17 12:36:29'),
        (4, 'Visi', 'visi', 'tentangKami', NULL, 'Testzz', 1, '2025-08-17 12:36:36', '2025-08-17 12:36:36'),
        (5, 'Misi', 'misi', 'tentangKami', NULL, 'Testzz', 1, '2025-08-17 12:36:43', '2025-08-17 12:36:43'),
        (6, 'Struktur Anggota', 'struktur-anggota', 'tentangKami', NULL, 'Testzz', 1, '2025-08-17 12:36:49', '2025-08-17 12:36:49'),
        (7, 'Kode Etik Perushaan', 'kode-etik-perushaan', 'tentangKami', NULL, 'Testzz', 1, '2025-08-17 12:36:55', '2025-08-17 12:36:55'),
        (8, 'sambutan', 'sambutan', 'sambutan', NULL, '<p class=\"ql-align-center\"><strong class=\"ql-size-huge\">Sambutan Pimpinan</strong></p><p><br></p><p><span class=\"ql-size-large\">Sebagai Direktur dari ITAKI, saya merasa bangga dan terhormat dapat memperkenalkan organisasi kami kepada Anda. ITAKI didirikan dengan visi untuk menjadi kekuatan penggerak dalam dunia teknologi dan inovasi di Indonesia. Seiring berjalannya waktu, kami telah membangun kemitraan yang kuat dengan berbagai perusahaan dan organisasi, serta menciptakan peluang untuk para profesional di bidang teknologi.&nbsp;&nbsp;</span></p><p><br></p><p><span class=\"ql-size-large\">Kami berkomitmen untuk terus mendorong perkembangan riset, mengembangkan teknologi, dan memberikan kontribusi positif dalam dunia industri. Di ITAKI, kami percaya bahwa inovasi bukan hanya tentang kemajuan teknologi, tetapi juga tentang menciptakan solusi yang dapat meningkatkan kualitas hidup masyarakat secara keseluruhan.&nbsp;&nbsp;</span></p>', 1, '2025-08-18 14:50:15', '2025-08-25 15:58:32'),
        (9, 'kode-etik-perushaan', 'kode-etik-perushaan', 'kode-etik-perushaan', NULL, 'kode-etik-perushaan', 0, '2025-08-18 15:32:26', '2025-08-18 15:41:44'),
        (10, 'kode-etik-perushaan', 'kode-etik-perushaan', 'kode-etik-perushaan', NULL, 'kode-etik-perushaan', 0, '2025-08-18 15:40:53', '2025-08-18 15:41:27'),
        (11, 'sejarah-itaki', 'sejarah-itaki', 'sejarah', NULL, '<p class=\"ql-align-center\">ITAKI adalah perusahaan teknologi yang didirikan dengan visi untuk menghadirkan solusi inovatif di bidang teknologi informasi dan komunikasi. Berdiri pada tahun 2010, ITAKI memulai perjalanan sebagai sebuah perusahaan kecil yang berfokus pada pengembangan perangkat lunak dan aplikasi untuk memenuhi kebutuhan pasar lokal.&nbsp;&nbsp;</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\">Seiring berjalannya waktu, ITAKI berkembang pesat dengan memperluas layanan dan portofolionya. Pada tahun 2015, ITAKI mulai merambah pasar internasional, berfokus pada penyediaan solusi perangkat lunak berbasis cloud dan pengembangan aplikasi mobile yang dapat diakses oleh berbagai kalangan, dari individu hingga perusahaan besar.&nbsp;&nbsp;</p><p class=\"ql-align-center\"><br></p><p class=\"ql-align-center\">Komitmen ITAKI terhadap inovasi dan kualitas menjadi landasan utama kesuksesannya. Dengan tim pengembang yang berdedikasi dan pengalaman yang terus berkembang, ITAKI berhasil menciptakan produk-produk unggulan yang mendukung berbagai sektor, seperti pendidikan, kesehatan, dan e-commerce.&nbsp;&nbsp;</p>', 1, '2025-08-25 16:37:22', '2025-08-25 17:03:28'),
        (12, 'misi', 'misi', 'misi', NULL, '<ol><li>Mengembangkan produk dan layanan teknologi yang berfokus pada peningkatan efisiensi dan produktivitas bagi pengguna di berbagai sektor industri.</li><li>Memberikan solusi teknologi yang dapat diakses dan diterapkan oleh perusahaan dari berbagai skala, mulai dari usaha kecil hingga perusahaan besar.</li><li>Mengutamakan kualitas dan keandalan dalam setiap layanan, dengan memberikan dukungan teknis yang responsif dan inovatif.</li><li>Berinvestasi dalam riset dan pengembangan untuk memastikan produk dan layanan yang selalu up-to-date dengan tren teknologi terbaru.</li><li>Menciptakan hubungan jangka panjang dengan pelanggan melalui pelayanan yang ramah, transparan, dan solusi yang disesuaikan dengan kebutuhan mereka.</li></ol>', 1, '2025-08-25 16:38:29', '2025-08-25 17:04:20'),
        (13, 'visi', 'visi', 'visi', NULL, '<p>Menjadi pemimpin dalam menyediakan solusi teknologi yang inovatif dan andal, mendukung transformasi digital yang berkelanjutan bagi bisnis dan masyarakat di seluruh dunia.&nbsp;&nbsp;</p>', 1, '2025-08-25 16:38:37', '2025-08-25 17:03:59')");

        // SOSMED
        DB::insert("INSERT INTO `sosmeds` VALUES (1, 'Facebook', 'sosmed/1755439760.png', 'test.com', 1, '2025-08-17 14:09:20', '2025-08-29 14:16:29'),
        (2, 'Twitter', NULL, 'youtube', 1, '2025-08-29 14:15:47', '2025-08-29 14:28:55'),
        (3, 'LinkedIn', NULL, 'https://www.linkedin.com/company/itaki/?originalSubdomain=id', 1, '2025-08-29 14:15:57', '2025-08-29 14:32:16'),
        (4, 'Instagram', NULL, 'instragram', 1, '2025-08-29 14:16:06', '2025-08-29 14:29:39')");
    }
}
