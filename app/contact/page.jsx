import ContactForm from "@/components/contactForm";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: `Contact - ${process.env.NEXT_PUBLIC_TITLE}`,
  openGraph: {
    title: `Contact - ${process.env.NEXT_PUBLIC_TITLE}`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_URL}/contact`,
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

export default async function ContactPage() {
  return (
    <>
      <MainLayout>
        <div className="mx-auto text-3xl font-semibold capitalize w-fit">
          <h2>Contact</h2>
        </div>
        <div className="mx-2 mt-6 text-base font-normal text-gray-500 sm:mx-4">
          <p>
            Terima kasih sudah berkunjung di{" "}
            <Link
              className="text-blue-400 hover:underline"
              href={process.env.NEXT_PUBLIC_URL}
            >
              sukundev.com
            </Link>
            . Jika ada yang ingin Anda tanyakan mengenai situs ini (bukan
            pertanyaan seputar artikel) atau ingin menjalin kerjasama, silakan
            hubungi kami melalui form berikut ini.
          </p>
        </div>
        <ContactForm />
      </MainLayout>
    </>
  );
}
