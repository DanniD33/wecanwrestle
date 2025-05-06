const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router/routes');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // serve index.html
app.use('/', routes);


app.get('/', (req, res) => {
  // res.sendFile('Hello from Homepage');
  res.sendFile(path.join(__dirname, 'main.html'));
  // if (req.user){
  //   return res.redirect('/login')
  // }
  // res.sendFile(path.join(__dirname, './static/homepage/testlog.html'));
});

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'images')));



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
