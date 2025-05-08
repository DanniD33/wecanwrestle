const { Pool } = require('pg');
const pool = require('../pg.js');

registerUser = async (req, res) => {
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
        phone } = req.body;

  try {
    const output = await pool.query('INSERT INTO attendee (fname,lname,dob,weight,session,cansbrought,waiver,efname,elname,phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
        [ fname,
          lname,
          dob,
          weight,
          session,
          cansbrought,
          waiver,
          efname,
          elname,
          phone]);
    // res.send('User registered successfully!');
    res.status(201).json({ message: "User saved", user: output.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Registration failed.');
  }
};

module.exports = { registerUser };
