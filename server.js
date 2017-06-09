var express = require("express");

var http = require("http");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var routes = require('./routes');
var users = require('./routes/users');
var admins = require('./routes/admin');




var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

//加载哪个路由器
// app.use('/', routes);
// app.use('/users', users);
app.use('/admin', admins);



app.get('/', function(req, res){
    res.render('index', {title: 'hbs demo', author: 'chyingp'});
});


app.get('/site_num/:id?', function (req, res) {
 res.render('site_num', {Num: req.query.idn});
});


app.get('/list', function (req, res) {
   res.send('Hello GET');
});

app.get('/admin', function (req, res) {
  res.sendFile( __dirname + "/views/admin/index.html" );
});
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});




// var tl = express.Router();
//     tl.get('/uuu', function(req, res){
//         res.send('llllll');
//     });
//     app.use(tl);


var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
