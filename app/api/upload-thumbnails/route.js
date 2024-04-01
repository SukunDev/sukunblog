import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("thumbnail");
  if (!file) {
    return NextResponse.json(
      { status: false, message: "No files received." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");
  try {
    await writeFile(
      path.join(process.cwd(), "public/thumbnails/" + filename),
      buffer
    );
    return NextResponse.json({
      success: true,
      result: `${process.env.NEXT_PUBLIC_URL}/thumbnails/${filename}`,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      status: false,
      messag: error.toString(),
      status: 500,
    });
  }
};
