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

const jsonLd = [
  {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "@id": `${process.env.NEXT_PUBLIC_URL}/#webpage`,
    name: `Contact - ${process.env.NEXT_PUBLIC_TITLE}`,
    url: `${process.env.NEXT_PUBLIC_URL}/`,
    lastReviewed: "2024-03-27T15:49:31.176021+00:00",
    dateCreated: "2024-03-27T15:49:31.176021+00:00",
    inLanguage: "id",
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    mainEntity: {
      "@type": "Article",
      mainEntityOfPage: `${process.env.NEXT_PUBLIC_URL}/`,
      headline: `Contact - ${process.env.NEXT_PUBLIC_TITLE}`,
      description: process.env.NEXT_PUBLIC_DESCRIPTION,
      keywords: "",
      datePublished: "2024-03-27T15:49:31.176021+00:00",
      dateModified: "2024-03-27T15:49:31.176021+00:00",
      author: {
        "@type": "Person",
        name: process.env.NEXT_PUBLIC_AUTHOR,
        description: "A passionate fullstack developer from Indonesia",
        url: `${process.env.NEXT_PUBLIC_URL}/about`,
        sameAs: [process.env.NEXT_PUBLIC_URL],
        image: {
          "@type": "ImageObject",
          url: "https://avatars.githubusercontent.com/u/83165558?v=4",
          height: 96,
          width: 96,
        },
      },
      publisher: {
        "@type": "Organization",
        name: process.env.NEXT_PUBLIC_TITLE,
        url: process.env.NEXT_PUBLIC_URL,
        logo: {
          "@type": "ImageObject",
          url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
          width: "500",
          height: "500",
        },
      },
      image: {
        "@type": "ImageObject",
        "@id": `${process.env.NEXT_PUBLIC_URL}/#primaryimage`,
        url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
        width: "3544",
        height: "3544",
      },
    },
    reviewedBy: {
      "@type": "Organization",
      name: process.env.NEXT_PUBLIC_TITLE,
      url: process.env.NEXT_PUBLIC_URL,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
        width: "500",
        height: "500",
      },
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "NewsMediaOrganization",
    "@id": `${process.env.NEXT_PUBLIC_URL}#Organization`,
    name: process.env.NEXT_PUBLIC_TITLE,
    url: `${process.env.NEXT_PUBLIC_URL}`,
    sameAs: [],
    logo: {
      "@type": "ImageObject",
      url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
      width: "500",
      height: "500",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+62-813-2532-4102",
      url: `${process.env.NEXT_PUBLIC_URL}/contact/`,
    },
  },
];

export default async function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
