// server.js
var express = require("express");
var app = express();
var bodyParser     = require('body-parser');
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('files'));
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/all_routes')(app);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(port, () => {
  console.log('We are live on ' + port);
});
