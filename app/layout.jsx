import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const revalidate = 0;

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
      <body className="font-montserrat bg-gray-50">
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
      </body>
    </html>
  );
}
