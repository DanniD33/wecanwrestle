const { Pool } = require('pg');

// Setup your pool with real credentials
const pool = new Pool({
  user: 'dannidenmark',
  host: 'localhost',
  database: 'wecanwrestle',
  password: 'your_password',
  port: 3000,
});

const registerUser = async (req, res) => {
  const {
        fname,
        lname,
        dob,
        weight,
        session,
        cansbrought,
        waiver,
        efname,
        elname,
        phone } = request.body;

  try {
    await pool.query('INSERT INTO attendee (fname,lname,dob,weight,session,cansbrought,waiver,efname,elname,phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
        [ fname,
          lname,
          dob,
          weight,
          session,
          cansbrought,
          waiver,
          efname,
          elname,
          phone]),
    res.send('User registered successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Registration failed.');
  }
};

module.exports = { registerUser };
