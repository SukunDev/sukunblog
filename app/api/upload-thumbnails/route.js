import { NextResponse } from "next/server";
import axios from "axios";
import sharp from "sharp";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("thumbnail");
  if (!file) {
    return NextResponse.json(
      { status: false, message: "No files received." },
      { status: 400 }
    );
  }

  const filename = file.name.replace(/\.[^/.]+$/, "");
  try {
    let data = new FormData();
    let imageBuffer;

    // Check if the file is not in WebP format, convert it to WebP
    if (file.type !== "image/webp") {
      const buffer = await file.arrayBuffer();
      imageBuffer = await sharp(buffer)
        .webp() // Convert to WebP
        .toBuffer();
    } else {
      const buffer = await file.arrayBuffer();
      imageBuffer = Buffer.from(buffer);
    }

    // Create a Blob from imageBuffer
    const blob = new Blob([imageBuffer], { type: "image/webp" });

    // Append Blob to FormData
    data.append("image", blob, filename);
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
