import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const res = await fetch(`https://i.ibb.co/${params.data.join("/")}`);
    const blob = await res.blob();
    return new NextResponse(blob);
  } catch (error) {
    redirect("/not-found");
  }
  // return NextResponse.json({ status: 200 });
};
