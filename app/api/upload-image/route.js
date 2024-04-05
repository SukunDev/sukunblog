import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  const filename = file.name.replaceAll(" ", "_");
  try {
    let data = new FormData();
    data.append("image", file);
    data.append("name", filename);
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
      data
    );
    if (response.data.success) {
      return NextResponse.json({
        success: true,
        result: `${
          process.env.NEXT_PUBLIC_URL
        }/img/${response.data.data.image.url.replace("https://i.ibb.co/", "")}`,
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
