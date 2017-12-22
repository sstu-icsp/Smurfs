// server.js
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const config = require('./config');
var mongoose = require("./libs/mongoose");
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

<<<<<<< HEAD
app.set('port', process.env.PORT |config.get('port'));
=======
app.set('port',process.env.PORT|config.get('port'));
>>>>>>> ff4afba831f6bec930ef5479151a2b872d259cc1

app.use(express.static('public'));
app.use(express.static('files'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: config.get("session:secret"),
  key:config.get("session:key"),
  resave: false,
  saveUninitialized: false,
  cookie:config.get("session:cookie"),
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var routes = require('./routes/all_routes')(app);
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log('We are live on ' + app.get('port'));
});
