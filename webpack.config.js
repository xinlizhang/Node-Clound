require('babel-register')({
  presets: ['es2015', 'stage-0', 'react']
});
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

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
var proxy = require('http-proxy-middleware')
//require('xml2js') xml 和json 互相转换
//require('fs') 文件读写操作

var routes = require('./app/main');
var admins = require('./routes/admin');
var index = require('./routes/index');
var sendajaxs = require('./routes/sendajax');


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
         loaders: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015', 'stage-0', 'react']
             }
         }]
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
app.use('/sendajax', sendajaxs);


// app.get('/', function(req, res){
//     res.render('index', {title: 'hbs demo', author: 'chyingp223'});
// });

app.get('/site_num/:id?', function (req, res) {
 res.render('site_num', {Num: req.query.idn});
});


app.get('/list', function (req, res) {
   res.send('Hello GET');
});

app.get('/sendajax', function(req, res) {
  var url ='https://svt4sugarlb01a.rtp.raleigh.ibm.com/sales/salesconnect/rest/v10/Opportunities&platform=mobile&fields=name%2Csales_stage%2Cdate_closed%2Cassigned_user_name%2Cassigned_bp_name%2Camount%2Cdescription%2Copportun_winplans%2Caccount_name%2Cassigned_user_id%2Cassigned_bp_id%2Caccount_id%2Cpcontact_id_c%2Clead_source%2Csolution_codes_c%2Creason_won_c%2Creason_lost_c%2Ctags%2Ccampaign_code_c%2Ccontact_id_c%2Ccmr_c%2Ccmr_id%2Cmy_favorite%2Cfollowing%2Ccurrency_id%2Cclosed_revenue_line_items%2Ccommit_stage%2Cbase_rate%2Cbest_case%2Cworst_case%2Cacceptance_due_date%2Cowner_acceptance_status_c%2Cbp_om_ownership_enabled%2Cbp_sales_stage%2Cmatch_bp_sales_stage&max_num=20';
      url = url + '&offset=' + req.query.offset + '&OAuth-Token=' + req.query.token; //？ 去掉重复offset
      console.log(req.query);
  console.log(url);
     request({
          method: 'GET',
          uri: url,
          strictSSL: false,
          rejectUnauthorized: false
      }, function(error, response, body) {
          if (!error && response.statusCode == 200) {
            res.send(body);
          } else {
              res.send('ERROR: There was a problem with retrieving the sanity results.');
          }
      });
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


