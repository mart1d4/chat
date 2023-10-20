import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool({
    user: process.env.PGUSER as string,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT as string),
    ssl: {
        rejectUnauthorized: false,
    },
});

async function main() {
    const result = await pool.query("SELECT $1::text as name", ["brianc"]);
    console.log(result.rows[0].name);
}

main();
