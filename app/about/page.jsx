import OnCopy from "@/components/onCopy";
import ProjectCard from "@/components/projectCard";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { getProjects } from "@/utils/clientAction";
import Image from "next/image";
import Link from "next/link";
import { PiPlusCircle } from "react-icons/pi";

export const metadata = {
  alternates: {
    canonical: "/about",
  },
  title: `About - ${process.env.NEXT_PUBLIC_TITLE}`,
  openGraph: {
    title: `About - ${process.env.NEXT_PUBLIC_TITLE}`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_URL}/about`,
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

export default async function AboutPage() {
  const { projects } = await getProjects();

  return (
    <>
      <MainLayout>
        <div className="flex flex-col-reverse items-center mx-2 mt-6 sm:mx-4 sm:flex-row">
          <div className="w-full mt-4 text-center sm:w-3/5 sm:mt-0 xs:text-start">
            <h1 className="text-3xl font-medium sm:text-4xl text-slate-900">
              I&apos;m Lutfi Ainun N
            </h1>
            <p className="text-base sm:text-lg text-slate-500">
              A passionate fullstack developer from Indonesia
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 xs:justify-normal">
              <div className="relative z-0 group">
                <Link
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 font-normal rounded-md bg-slate-900 text-white  flex-row`}
                  href={`${process.env.NEXT_PUBLIC_URL}/contact`}
                >
                  <PiPlusCircle />
                  Hire Me
                </Link>
                <div className="absolute inset-0 transition-all duration-300 bg-gray-300 rounded-md group-hover:-inset-[3px] -z-10"></div>
              </div>
              <div className="relative z-0 group">
                <OnCopy name={"Copy Email"} content="sukundev32@gmail.com" />
                <div className="absolute inset-0 transition-all duration-300 bg-gray-300 rounded-md group-hover:-inset-[3px] -z-10"></div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/5">
            <Image
              className="mx-auto"
              src={"/uploads/lutfi-cartoon.png"}
              alt="sukundev"
              width={280}
              height={280}
            />
          </div>
        </div>
        {projects.length > 0 ? (
          <div className="px-4 pt-4 pb-8 mt-16 bg-gray-100 rounded-xl">
            <div className="flex items-center justify-between m-2 sm:m-4">
              <div className="flex items-center gap-2 text-xl">
                <div className="p-[3px] rounded-full bg-slate-500"></div>
                <h2 className="font-semibold capitalize text-slate-700">
                  Projects
                </h2>
              </div>
            </div>
            <div className="flex flex-col mt-6 space-y-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.name}
                  description={project.description}
                  src={project.thumbnail}
                  href={project.links}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="my-16 text-center">
          <h2 className="text-3xl font-medium sm:text-4xl text-slate-900">
            Let&apos;s work together.
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-500">
            Creating user experience and visual appealing design
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="relative z-0 group">
              <Link
                className={`relative flex items-center gap-1.5 px-3 py-1.5 font-normal rounded-md bg-slate-900 text-white  flex-row`}
                href={`${process.env.NEXT_PUBLIC_URL}/contact`}
              >
                <PiPlusCircle />
                Hire Me
              </Link>
              <div className="absolute inset-0 transition-all duration-300 bg-gray-300 rounded-md group-hover:-inset-[3px] -z-10"></div>
            </div>
            <div className="relative z-0 group">
              <OnCopy name={"Copy Email"} content="sukundev32@gmail.com" />
              <div className="absolute inset-0 transition-all duration-300 bg-gray-300 rounded-md group-hover:-inset-[3px] -z-10"></div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
