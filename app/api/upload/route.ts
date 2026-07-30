import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join, relative } from "path";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const file = data.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const extension = file.name.split(".").pop();
    const filename = `${randomUUID()}.${extension}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = process.env.UPLOAD_DIR
      ? join(process.cwd(), process.env.UPLOAD_DIR)
      : join(process.cwd(), "public/uploads");

    await mkdir(uploadDir, { recursive: true });

    const filePath = join(uploadDir, filename);
    await writeFile(filePath, buffer);

    const publicDir = join(process.cwd(), "public");
    const imageUrl = process.env.UPLOAD_URL_PREFIX && process.env.UPLOAD_URL_PREFIX.trim() !== ""
      ? `${process.env.UPLOAD_URL_PREFIX.replace(/\/$/, "")}/${filename}`
      : uploadDir.startsWith(publicDir)
      ? `/${relative(publicDir, filePath).replace(/\\/g, "/")}`
      : `/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      image: imageUrl,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}