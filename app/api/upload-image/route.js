import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");
  try {
    await writeFile(path.join("public/uploads/" + filename), buffer);
    return NextResponse.json({
      success: true,
      result: `${process.env.NEXT_PUBLIC_URL}/uploads/${filename}`,
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
