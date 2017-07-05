require('babel-register');

var path = require('path');
var express = require("express");
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan'); //日志模块
var async = require('async'); //异步请求
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig'); // 视图引擎
//require('xml2js') xml 和json 互相转换
//require('fs') 文件读写操作

var routes = require('./routes');
var admins = require('./routes/admin');
var index = require('./routes/index');
var cfenv = require("cfenv");

var cookieParser = require('cookie-parser');

var app = express();

module.exports = {
     entry: './server.js',

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
var port = process.env.PORT || 8000
app.use(compression());  // 压缩gzip包
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.set('views', path.join(__dirname, 'views')); //设置view位置
app.set('view engine', 'hbs');//调用模板类型

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

app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});


