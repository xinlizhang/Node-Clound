
// import React from 'react';
// var React = require('react');
// var Router = require('react-router');
// var ReactDOM = require('react-dom');

import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';

import App from './routes';

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
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         title={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root')
);

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
