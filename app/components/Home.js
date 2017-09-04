import React from 'react';
import {bindActionCreators, createStore} from 'redux';
import 'babel-polyfill';  // 为generator 使用
import {connect, Provider} from 'react-redux';
import fetch from 'isomorphic-fetch';

export default class Home  extends React.Component {

    constructor(props){
      super(props);
      this.state = {
      	scJsonData: []
      }
    }
    
	render() {
		return(
			<div />
			);
	}

}












