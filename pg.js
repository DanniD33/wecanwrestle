// // Import required modules
const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const bodyParser = require('body-parser');


const pool = new Pool({
  user: 'dannidenmark',
  password: 'your_password',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'wecanwrestle'
});

// pool.connect();
// module.exports = {
//   query: (text, params) => pool.query(text, params)
// };

// module.exports = [{
//   query: ('SELECT * from users', (err, res)) => pool.query(text, params)
// };]



module.exports = pool;








//Start up psql -> psql attendee
/**
 * 
CREATE TABLE attendee (
  register_id SERIAL NOT NULL PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255),
  dob DATE,
  weight INT,
  session INT,
  cansbrought INT,
  waiver Boolean,
  efname VARCHAR(255),
  elname VARCHAR(255),
  phone VARCHAR(10)
);


INSERT INTO attendee (
  fname,
  lname,
  dob,
  weight,
  session,
  cansbrought,
  waiver,
  efname,
  elname,
  phone)
  VALUES
  ( 
    'test',
    'kid1',
    '2018-07-04',
    60,
    2,
    2,
    true,
    'test',
    'parent1',
    '8032223333'),
    
    ( 
      'testk2',
      'kid2',
      '2019-11-04',
      65,
      1,
      1,
      true,
      'testp2',
      'parent2',
      '8033334444'),
      
      ( 
        'testk3',
        'kid3',
        '2018-2-12',
        76,
        2,
        2,
        true,
        'testp3',
        'parent3',
        '1803222333');
  */