require("dotenv").config({ path: ".env.local" });

const bcrypt = require("bcryptjs");
const mysql = require("mysql2/promise");

async function resetAdmin() {
  let db;

  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const newPassword = "DaviesAdmin123!";

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const [result] = await db.execute(
      `
      UPDATE admins
      SET password = ?
      WHERE email = ?
      `,
      [hashedPassword, "admin@davies.com"]
    );

    if (result.affectedRows === 0) {
      console.log("Admin account not found.");
    } else {
      console.log("Admin password reset successfully.");
      console.log("Email: admin@davies.com");
      console.log("Temporary password: DaviesAdmin123!");
    }

  } catch (error) {
    console.error("Database error:", error);
  } finally {
    if (db) {
      await db.end();
    }
  }
}

resetAdmin();