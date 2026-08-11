import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// ==========================
// GET ALL REQUESTS
// ==========================
export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT *
      FROM service_requests
      ORDER BY created_at DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("GET SERVICE REQUESTS ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch requests.",
      },
      {
        status: 500,
      }
    );
  }
}

// ==========================
// CREATE REQUEST
// ==========================
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      service,
      message,
    } = body;

    // ==========================
    // VALIDATE EMPTY FIELDS
    // ==========================
    if (
      !name ||
      !phone ||
      !service ||
      !message ||
      name.trim() === "" ||
      phone.trim() === "" ||
      service.trim() === "" ||
      message.trim() === ""
    ) {
      return NextResponse.json(
        {
          error: "Please fill in all the required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================
    // VALIDATE PHONE NUMBER
    // ==========================
    const phoneRegex = /^[0-9+\-\s]{10,15}$/;

    if (!phoneRegex.test(phone.trim())) {
      return NextResponse.json(
        {
          error: "Please enter a valid phone number.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================
    // TEMPORARY DATABASE CHECK
    // ==========================
    const [dbInfo]: any = await db.query(`
      SELECT DATABASE() AS database_name
    `);

    console.log(
      "DATABASE USED BY VERCEL:",
      dbInfo
    );

    // ==========================
    // CHECK SERVICE REQUEST TABLE
    // ==========================
    const [tableCheck]: any = await db.query(`
      SHOW TABLES LIKE 'service_requests'
    `);

    console.log(
      "SERVICE REQUEST TABLE:",
      tableCheck
    );

    // ==========================
    // INSERT REQUEST
    // ==========================
    await db.query(
      `
      INSERT INTO service_requests
      (
        name,
        phone,
        service,
        message
      )
      VALUES
      (
        ?, ?, ?, ?
      )
      `,
      [
        name.trim(),
        phone.trim(),
        service.trim(),
        message.trim(),
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully.",
    });
  } catch (error) {
    console.error(
      "CREATE SERVICE REQUEST ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

// ==========================
// UPDATE REQUEST STATUS
// ==========================
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      id,
      status,
    } = body;

    if (!id || !status) {
      return NextResponse.json(
        {
          error: "Missing request ID or status.",
        },
        {
          status: 400,
        }
      );
    }

    await db.query(
      `
      UPDATE service_requests
      SET status = ?
      WHERE id = ?
      `,
      [
        status,
        id,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Status updated successfully.",
    });
  } catch (error) {
    console.error(
      "UPDATE SERVICE REQUEST ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to update request.",
      },
      {
        status: 500,
      }
    );
  }
}

// ==========================
// DELETE REQUEST
// ==========================
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          error: "Request ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    await db.query(
      `
      DELETE FROM service_requests
      WHERE id = ?
      `,
      [id]
    );

    return NextResponse.json({
      success: true,
      message: "Request deleted successfully.",
    });
  } catch (error: any) {
    console.error(
      "DELETE SERVICE REQUEST ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}