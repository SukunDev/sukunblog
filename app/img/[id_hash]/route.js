import axios from "axios";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const response = await axios.get(
      `https://api.imgur.com/3/image/${params.id_hash}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`,
        },
      }
    );
    if (response.data.success) {
      const res = await fetch(response.data.data.link);
      const blob = await res.blob();
      return new NextResponse(blob);
    } else {
      redirect("/notfound");
    }
  } catch (error) {
    redirect("/");
  }
  // return NextResponse.json({ status: 200 });
};
