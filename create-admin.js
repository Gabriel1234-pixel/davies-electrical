require("dotenv").config();
const bcrypt = require("bcryptjs");
const mysql = require("mysql2/promise");

async function createAdmin() {


const db = await mysql.createConnection({
  host: process.env.DB_HOST ?? "localhost",
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME ?? "davies_electrical",
});



const password = await bcrypt.hash(
"admin123",
10
);



await db.execute(

`
INSERT INTO admins
(name,email,password)

VALUES(?,?,?)

`,

[
"Davies Admin",
"admin@davieselectrical.com",
password
]

);



console.log("Admin created");


process.exit();

}


createAdmin();