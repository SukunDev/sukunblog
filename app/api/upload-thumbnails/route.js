import { NextResponse } from "next/server";
import axios from "axios";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("thumbnail");
  if (!file) {
    return NextResponse.json(
      { status: false, message: "No files received." },
      { status: 400 }
    );
  }

  const filename = file.name.replaceAll(" ", "_");
  try {
    let data = new FormData();
    data.append("image", file);
    data.append("type", "file");
    data.append("title", filename);
    const response = await axios.post(`https://api.imgur.com/3/image`, data, {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`,
    });
    if (response.data.success) {
      return NextResponse.json({
        success: true,
        result: `${process.env.NEXT_PUBLIC_URL}/img/${response.data.data.id}`,
        status: 201,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: response.data.message,
        status: 500,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.toString(),
      status: 500,
    });
  }
};
