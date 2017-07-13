
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './components/App';
import Home from './components/Home';
import FooterBar from './components/Footer';
import ChatBar from './components/Chat';
import TableBar from './components/Table';
import JsonBar from './components/reJson';


if(typeof window !== 'undefined') {
	ReactDOM.render((
	   <HashRouter>
	      <div>
		      <Navbar />
		      <Route exact path="/" component={Home} />
		      <Route exact path="/app" component={App} />
		      <Route exact path="/chat" component={ChatBar} />
		      <Route exact path="/table" component={TableBar} />
		      <Route exact path="/json" component={JsonBar} />
		      <FooterBar />
	      </div>
	   </HashRouter >
	), document.getElementById('root'))
}