import MainLayout from "@/layouts/MainLayout/MainLayout";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/terms-of-service",
  },
  title: `Terms of Service - ${process.env.NEXT_PUBLIC_TITLE}`,
  openGraph: {
    title: `Terms of Service - ${process.env.NEXT_PUBLIC_TITLE}`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_URL}/terms-of-service`,
    siteName: process.env.NEXT_PUBLIC_TITLE,
    locale: "id_ID",
    type: "article",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/thumbnail.png`,
      },
    ],
  },
};

export default async function TermsofService() {
  return (
    <>
      <MainLayout>
        <div className="mx-auto text-3xl font-semibold capitalize w-fit">
          <h2>Terms of Service</h2>
        </div>
        <div className="mt-6 article">
          <p>
            Selamat datang di sukundev.com. Ketentuan Layanan berikut ini adalah
            ketentuan dalam penggunaan situs, konten, layanan, serta berbagai
            fitur yang ada di sukundev.com.
          </p>
          <p>
            Silahkan membaca Ketentuan Layanan ini sebaik-baiknya. Dengan
            mengakses situs ini berarti anda telah menyetujui dan terikat untuk
            mematuhi persyaratan dan ketentuan layanan pada website ini beserta{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_URL}/privacy-policy`}
              target="_blank"
              rel="noopener"
            >
              Kebijakan Privasinya
            </Link>
            .
          </p>
          <p>
            Jika anda tidak setuju atau keberatan untuk terikat dengan
            persyaratan dan ketentuan layanan yang berlaku di sukundev.com,
            silahkan untuk tidak menggunakan layanan situs ini.
          </p>
          <p>
            <strong>
              Penggunaan situs sukundev.com mengacu pada persyaratan dan
              ketentuan berikut :
            </strong>
          </p>
          <ul>
            <li>
              Semua konten dan isi yang ada di situs ini merupakan informasi
              umum yang bisa diubah oleh pengelola sewaktu-waktu tanpa
              pemberitahuan.
            </li>
            <li>
              Situs ini menggunakan cookies untuk memonitor berbagai preferensi
              browsing yang ditujukan untuk mengetahui statistik pengunjung dan
              menampilkan iklan yang relevan kepada pengunjung. Dengan mengakses
              situs sukundev.com, anda mengetahui sekaligus menyetujui tentang
              penggunaan cookies tersebut pada situs ini.
            </li>
            <li>
              Anda mengetahui dan menyetujui bahwa pengelola maupun pihak ketiga
              tidak memberikan jaminan keakuratan, ketepatan, kelengkapan, atau
              kecocokan konten / informasi yang disediakan di situs ini untuk
              tujuan apapun. Anda menyetujui bahwa informasi dan materi tersebut
              mungkin berisi ketidakakuratan atau kesalahan dan pengelola tidak
              bertanggung jawab terhadap setiap ketidakakuratan atau kesalahan,
              selama masih dalam batas yang diijinkan oleh hukum.
            </li>
            <li>
              Anda mengetahui dan menyetujui bahwa penggunaan material atau
              informasi apapun di situs ini sepenuhnya menjadi resiko anda, dan
              bukan menjadi tanggung jawab pengelola.
            </li>
            <li>
              Sebagian besar gambar (screenshot tutorial, gambar produk, review
              dll) di situs ini dibuat oleh pengelola dan pengelola memiliki
              copyright penuh dari gambar tersebut. Gambar tipe ini ditandai
              dengan adanya watermark logo SukunDev. Anda dilarang mengklaim
              gambar tersebut sebagai milik anda.
            </li>
            <li>
              Terdapat gambar maupun aplikasi / software yang terdapat pada
              situs ini didapatkan dari berbagai sumber. Copyright dari gambar
              maupun aplikasi / software tersebut dimiliki oleh pemegang
              copyright dan bukan oleh SukunDev. Anda menyetujui bahwa pengelola
              tidak memiliki dan tidak pernah mengklaim copyright dari gambar
              maupun aplikasi / software tersebut.
            </li>
            <li>
              Jika anda pemegang copyright dari gambar maupun aplikasi /
              software tersebut, silahkan hubungi kami melalui halaman{" "}
              <Link
                href={`${process.env.NEXT_PUBLIC_URL}/contact`}
                target="_blank"
                rel="noopener"
              >
                Halaman Kontak
              </Link>{" "}
              untuk request penghapusan konten tersebut. Kirimkan URL artikel
              yang dianggap melanggar copyright ke{" "}
              <a
                href="mailto:sukundev32@gmail.com"
                target="_blank"
                rel="noopener"
              >
                sukundev32@gmail.com
              </a>
              .
            </li>
            <li>
              Anda mengetahui bahwa sebagian besar isi dari situs ini dibuat
              oleh pengelola. Pengelola memiliki copyright penuh dari artikel
              tersebut. Anda dilarang untuk mengklaim isi dari situs ini sebagai
              milik anda.
            </li>
            <li>
              Sebagian lagi isi konten di situs ini berasal dari berbagai
              sumber. Anda menyetujui bahwa pengelola tidak memiliki dan tidak
              pernah mengklaim copyright dari konten-konten tersebut. Pengelola
              berusaha penuh untuk menampilkan setiap sumber.
            </li>
            <li>
              Dengan mengakses situs ini anda menyetujui untuk tidak
              memanfaatkan isi, konten, dan material lain dari situs ini untuk
              hal-hal yang tidak legal atau tidak sah di mata hukum.
            </li>
            <li>
              Anda menyetujui bahwa kami tidak bertanggung jawab atas konten
              yang disediakan pihak lain, baik itu di kolom komentar maupun di
              dalam posting. Kami tidak memiliki kewajiban untuk memeriksa
              konten tersebut, tetapi kami berhak menyunting serta memuat setiap
              konten yang dikirim. Pengelola berhak untuk menghapus konten
              dengan alasan apapun, tetapi kami tidak bertanggung jawab atas
              kegagalan atau penundaan penghapusan konten tersebut.
            </li>
            <li>
              Dari waktu ke waktu, situs ini akan menyertakan berbagai link ke
              situs lain. Link-link tersebut disediakan untuk memberikan
              informasi lebih lanjut kepada anda. Hal tersebut tidak berarti
              bahwa situs ini mendukung situs-situs tersebut. Anda mengetahui
              dan menyetujui bahwa pengelola tidak bertanggung jawab atas isi
              dari situs-situs tersebut.
            </li>
            <li>
              sukundev.com tidak pernah berjualan produk digital di marketplace
              online seperti Shopee, Tokopedia, Bukalapak, Forum dan lain
              sebagainya. sukundev.com tidak bertanggung jawab untuk segala
              kerugian yang diakibatkan oleh tindakan penipuan yang
              mengatasnamakan sukundev.com. Berhati-hatilah terhadap penipuan
              online yang mengatasnamakan sukundev.com.
            </li>
          </ul>
          <p>
            Berbagai hal tentang penggunaan situs ini dan setiap permasalahan
            yang timbul dari penggunaan tersebut akan ditujukan kepada hukum di
            Republik Indonesia.
          </p>
        </div>
      </MainLayout>
    </>
  );
}
