import Footer from "@/components/footer";
import Headers from "@/components/headers";
import Sidebar from "@/components/sidebar";
import { ThemeContextProvider } from "@/hooks/providers";
import { getNewPosts } from "@/utils/clientAction";
import React from "react";

export default async function MainLayout({ children }) {
  const { new_posts } = await getNewPosts();
  return (
    <ThemeContextProvider>
      <div className="flex flex-col min-h-screen">
        <Headers />
        <div className="relative z-0 flex flex-col flex-wrap flex-1 h-screen">
          <div className="container mx-auto mt-8 xs:mt-36">
            <div className="relative grid grid-cols-1 gap-16 xl:gap-16 lg:gap-14 lg:grid-cols-7">
              <main className="col-span-1 mx-2 lg:col-span-5 md:mx-4">
                {children}
              </main>
              <Sidebar new_article={new_posts} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}
