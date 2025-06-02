const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./router/routes.js');
const path = require('path');
// const pool = require('pg.js');
const app = express();
// const port = 10000;
const port = process.env.PORT || 10000 

// const port = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // serve index.html
// app.use('/', routes);


const runMigration = require('./migrate');



app.get('/', (req, res) => {
  // res.sendFile('Hello from Homepage');
  res.sendFile(path.join(__dirname, 'index.html'));
  if (req.user){
    return res.redirect('/login')
  }
  // res.sendFile(path.join(__dirname, './static/homepage/testlog.html'));
});

app.use(bodyParser.json());
app.use("/api", userRoutes);


const schema = fs.readFileSync("schema.sql", "utf8");

app.get("/run-migration", async (req, res) => {
  try {
    // await pool.query(schema);
    await require('./migrate');
    res.send("Migration successful");
  } catch (err) {
    console.error(err);
    res.status(500).send("Migration failed");
  }
});




app.use(express.static(path.join(__dirname, 'static'))); //without this line the waiver fails to load upon submission
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'images')));




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
