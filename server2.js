const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// const {regRouter} = require('./router/routes.js');
const db = require('./controller/usercontroller2.js');
const pool = require('./pg.js');
// const usercontroller = require("./controller/usercontroller.js");


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
