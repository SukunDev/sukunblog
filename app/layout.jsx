import "./globals.css";

export const revalidate = 60;

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: `%s`,
    default: `${process.env.NEXT_PUBLIC_TITLE} - ${process.env.NEXT_PUBLIC_SHORT_DESCRIPTION}`,
  },
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  authors: { name: process.env.NEXT_PUBLIC_AUTHOR },
  icons: {
    icon: "/favicon.ico",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat bg-gray-50">{children}</body>
    </html>
  );
}
