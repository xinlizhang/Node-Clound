var express = require("express");

var request = require('request');
var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom/server');
var compression = require('compression');


var app = express();


var router = express.Router();


var app = express();


router.get('/', function(req, res) {
  res.render('indexPage', { title: 'Test React run' });
});
module.exports = router;




// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './component.jsx';

// ReactDOM.render(<App />, document.getElementById('app'));



 // var config = {
 //     entry: './main.js',

 //     output: {
 //         path: __dirname,
 //         filename: 'app.js',
 //     },

 //     devServer: {
 //         inline: true,
 //         port: 3000
 //     },

 //     module: {
 //         loaders: [{
 //             test: /\.jsx?$/,
 //             exclude: /node_modules/,
 //             loader: 'babel-loader',
 //             query: {
 //                 presets: ['es2015', 'stage-0', 'react']
 //             }
 //         },
 //         ]
 //     }

 // };
 // module.exports = config;


