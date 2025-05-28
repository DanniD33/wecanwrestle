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
    res.send('User registered successfully!');
    res.status(201).json({ message: "User saved", user: output.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Registration failed.');
  }
};


 getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM attendee ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to retrieve users.');
  }
};

 getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM attendee WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('User not found.');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to retrieve user.');
  }
};


updateUser = async (req, res) => {
  const { id } = req.params;
  const { fname, lname, dob, weight, session, cansbrought, waiver, efname, elname, phone } = req.body;

  try {
    const result = await pool.query(
      `UPDATE attendee 
       SET fname=$1, lname=$2, dob=$3, weight=$4, session=$5, cansbrought=$6, waiver=$7, efname=$8, elname=$9, phone=$10
       WHERE id=$11 RETURNING *`,
      [fname, lname, dob, weight, session, cansbrought, waiver, efname, elname, phone, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('User not found.');
    }
    res.status(200).json({ message: 'User updated', user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to update user.');
  }
};



deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM attendee WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('User not found.');
    }
    res.status(200).json({ message: 'User deleted', user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to delete user.');
  }
};


module.exports = 
{ 
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
