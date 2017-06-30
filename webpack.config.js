require('babel-register');
var express = require("express");




var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var request = require('request');
var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom/server');
var compression = require('compression');

var routes = require('./routes');
var admins = require('./routes/admin');
var index = require('./routes/index');
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();







 var config = {
     entry: './main.js',

     output: {
         path: __dirname,
         filename: 'app.js',
     },

     devServer: {
         inline: true,
         port: 8000
     },

     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015', 'stage-0', 'react']
             }
         },
         ]
     }

 };
 module.exports = config;

app.use(compression());

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
app.use('/', index);
app.use('/admin', admins);


// app.get('/', function(req, res){
//     res.render('index', {title: 'hbs demo', author: 'chyingp223'});
// });


app.get('/site_num/:id?', function (req, res) {
 res.render('site_num', {Num: req.query.idn});
});


app.get('/list', function (req, res) {
   res.send('Hello GET');
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

 var port = process.env.PORT || 8000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});


