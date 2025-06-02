const fs = require('fs');
const path = require('path');
const pool = require('./db');  // Your existing pool setup with env DATABASE_URL

async function runMigration() {
  try {
    // Load your SQL file contents
    const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');

    // Run the SQL commands (e.g., CREATE TABLE IF NOT EXISTS attendee ...)
    await pool.query(sql);

    console.log('Migration ran successfully');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

runMigration();
