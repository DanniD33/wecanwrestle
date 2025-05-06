//this interacts with the database
//We will need to import the db
  //we can make writes and reads tot he db using promises
//export one giant object with the methods accessible in the router
// const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgres://username:password@host:port/database')

// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })


// // Route handler for GET student data
// app.get('/attendee', (req, res) => {
//   const query = 'SELECT * FROM attendee;';

//   pool.query(query, (error, result) => {
//     if (error) {
//       console.error('Error occurred:', error);
//       res.status(500).send('An error occurred while retrieving data from the database.');
//     } else {
//       const students = result.rows;
//       res.json(students);
//     }
//   });



// const Pool = require('pg').Pool;
// const pool = new Pool({
//   user: 'me',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432,
// })






// Import required modules
const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const bodyParser = require('body-parser');





const usercontroller = {
getUsers (request, response){
  // pool.query('SELECT * FROM attendee ORDER BY id ASC', (error, results) => {
  //   if (error) {
  //     throw error
  //   }
  //   response.status(200).json(results.rows)
  // })
  // response.send('here are the attendees');

},

// getUserById (request, response){
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM attendee WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// },

// createUser (request, response){
//   const {  
//     fname,
//     lname,
//     dob,
//     weight,
//     session,
//     cansbrought,
//     waiver,
//     efname,
//     elname,
//     phone } = request.body

//   pool.query('INSERT INTO attendee (fname,lname,dob,weight,session,cansbrought,waiver,efname,elname,phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [ fname,
//     lname,
//     dob,
//     weight,
//     session,
//     cansbrought,
//     waiver,
//     efname,
//     elname,
//     phone], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(201).send(`User added with ID: ${results.insertId}`);
//   })
// },
// updateUser (request, response){
//   const id = parseInt(request.params.id)
//   const {  
//     fname,
//     lname,
//     dob,
//     weight,
//     session,
//     cansbrought,
//     waiver,
//     efname,
//     elname,
//     phone } = request.body

//   pool.query(
//     'UPDATE attendee SET name = $1, session = $2 WHERE id = $3',
//     [fname, session, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// },

// deleteUser(request, response){
//   const id = parseInt(request.params.id)

//   pool.query('DELETE FROM attendee WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })
// }
}








module.exports = {
usercontroller
};