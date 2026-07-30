import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT DATABASE() AS database_name");

    return NextResponse.json({
      success: true,
      database: rows,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
        code: error.code,
      },
      {
        status: 500,
      }
    );
  }
}