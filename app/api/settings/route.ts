import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// =========================
// GET SETTINGS
// =========================
export async function GET() {
  try {
    const [rows]: any = await db.query(
      "SELECT * FROM settings LIMIT 1"
    );

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load settings",
      },
      {
        status: 500,
      }
    );
  }
}

// =========================
// UPDATE SETTINGS
// =========================
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const {
  companyName,
  phone,
  whatsapp,
  email,
  address,
  heroTitle,
  heroSubtitle,
  businessHours,
  location,
  googleMap,
  facebook,
  instagram,
  linkedin,
} = body;

    const [result]: any = await db.query(
  `
  UPDATE settings
  SET
    company_name = ?,
    phone = ?,
    whatsapp = ?,
    email = ?,
    address = ?,
    hero_title = ?,
    hero_subtitle = ?,
    business_hours = ?,
    location = ?,
    google_map = ?,
    facebook = ?,
    instagram = ?,
    linkedin = ?
  WHERE id = 1
  `,
  [
    companyName,
    phone,
    whatsapp,
    email,
    address,
    heroTitle,
    heroSubtitle,
    businessHours,
    location,
    googleMap,
    facebook,
    instagram,
    linkedin,
  ]
);
console.log("Update Result:", result);

    return NextResponse.json({
      success: true,
      message: "Settings updated successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to update settings.",
      },
      {
        status: 500,
      }
    );
  }
}