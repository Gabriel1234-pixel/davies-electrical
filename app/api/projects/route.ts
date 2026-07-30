import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

// ==============================
// GET ALL PROJECTS
// ==============================
export async function GET() {
  try {
    const [rows]: any = await db.query(`
      SELECT *
      FROM projects
      ORDER BY created_at DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// ==============================
// CREATE PROJECT
// ==============================
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      title,
      category,
      description,
      image,
    } = body;

    if (!title || !category || !description) {
      return NextResponse.json(
        {
          error: "Title, category and description are required.",
        },
        {
          status: 400,
        }
      );
    }

    const [result]: any = await db.query(
      `
      INSERT INTO projects
      (
        title,
        category,
        description,
        image
      )
      VALUES (?, ?, ?, ?)
      `,
      [
        title,
        category,
        description,
        image || null,
      ]
    );

    return NextResponse.json(
      {
        message: "Project created successfully.",
        id: result.insertId,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to create project.",
      },
      {
        status: 500,
      }
    );
  }
}

// ==============================
// UPDATE PROJECT
// ==============================
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      id,
      title,
      category,
      description,
      image,
    } = body;

    if (!id) {
      return NextResponse.json(
        {
          error: "Project ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    await db.query(
      `
      UPDATE projects
      SET
        title = ?,
        category = ?,
        description = ?,
        image = ?
      WHERE id = ?
      `,
      [
        title,
        category,
        description,
        image,
        id,
      ]
    );

    return NextResponse.json({
      message: "Project updated successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to update project.",
      },
      {
        status: 500,
      }
    );
  }
}

// ==============================
// DELETE PROJECT
// ==============================
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          error: "Project ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    await db.query(
      `
      DELETE FROM projects
      WHERE id = ?
      `,
      [id]
    );

    return NextResponse.json({
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to delete project.",
      },
      {
        status: 500,
      }
    );
  }
}