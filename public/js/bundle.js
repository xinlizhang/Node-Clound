(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const user = {
// 	firstName: 'Evan',
// 	lastName: 'King'
// };

// function formatName(user) {
// 	return user.firstName + ' ' + user.lastName;
// }
// function tick() {
// 	const element = (
// 			<div>
// 			<h1>Hello, {formatName(user)}</h1>
// 			<h2> It is {new Date().toLocaleTimeString()}.</h2>
// 			</div>
// 		);
// 	ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);

// import React from 'react';
// var React = require('react');
// var Router = require('react-router');
// var ReactDOM = require('react-dom');

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return _react2.default.createElement('img', { className: 'Avatar',
    src: props.user.avatarUrl,
    title: props.user.name });
}

function UserInfo(props) {
  return _react2.default.createElement(
    'div',
    { className: 'UserInfo' },
    _react2.default.createElement(Avatar, { user: props.user }),
    _react2.default.createElement(
      'div',
      { className: 'UserInfo-name' },
      props.user.name
    )
  );
}

function Comment(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Comment' },
    _react2.default.createElement(UserInfo, { user: props.author }),
    _react2.default.createElement(
      'div',
      { className: 'Comment-text' },
      props.text
    ),
    _react2.default.createElement(
      'div',
      { className: 'Comment-date' },
      formatDate(props.date)
    )
  );
}

var comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
_reactDom2.default.render(_react2.default.createElement(Comment, {
  date: comment.date,
  text: comment.text,
  author: comment.author }), document.getElementById('root'));

// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }


// function Bpp() {    //首字母大写
// 	return(
// 		<div>
// 			<Welcome name="Evan"/>
// 			<Welcome name="Walter"/>
// 			<Welcome name="Jade"/>
// 		</div>
// 		);
// }

// ReactDOM.render(
// 	<Bpp/>,
// 	document.getElementById('root')    //不能加';'号
// 	);

// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }


// const element2 = <Welcome name="EvanYao"/>;


// ReactDOM.render (
// 	element2,
// 	document.getElementById('app2')
// 	);

// const but = (
// 	<button >Stop </button>
// );

// ReactDOM.render(
//   but,
//   document.getElementById('app1')
// );


// ReactDOM.render(<App />, document.getElementById('app'));

},{"./routes":2,"react":"react","react-dom":"react-dom","react-router":"react-router"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
   _inherits(App, _React$Component);

   function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
   }

   _createClass(App, [{
      key: 'render',
      value: function render() {
         return _react2.default.createElement(
            'div',
            null,
            'hello World@ !!',
            _react2.default.createElement('br', null)
         );
      }
   }]);

   return App;
}(_react2.default.Component);

exports.default = App;

},{"react":"react"}]},{},[1])

//# sourceMappingURL=bundle.js.map
