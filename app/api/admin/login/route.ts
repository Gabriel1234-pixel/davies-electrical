import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  return NextResponse.redirect(new URL("/admin/login", req.url));
}

export async function POST(req: NextRequest) {
  try {
    const bodyText = await req.text();
    let body: { email?: string; password?: string };

    try {
      body = JSON.parse(bodyText);
    } catch (parseError) {
      console.error("Admin login parse error:", parseError, "raw body:", bodyText);
      return NextResponse.json(
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    const { email, password } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const [rows]: any = await db.query(
      "SELECT * FROM admins WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const admin = rows[0];

    if (password) {
      const passwordMatch = await bcrypt.compare(
        password,
        admin.password
      );

      if (!passwordMatch) {
        return NextResponse.json(
          { error: "Invalid email or password." },
          { status: 401 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}