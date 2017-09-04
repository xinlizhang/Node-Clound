import Redux from 'redux';
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';


//同步请求
// export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

// export function selectSubreddit(subreddit) {
//   return {
//     type: SELECT_SUBREDDIT,
//     subreddit
//   }
// }



// //异步发送请求
// export const REQUEST_POSTS = 'REQUEST_POSTS';
// function requestPosts(subreddit) {
// 	return {
// 		type: REQUEST_POSTS,
// 		subreddit
// 	}
// }

// //接收请求
// export const RECEIVE_POSTS = 'RECEIVE_POSTS';
// function receivePosts(subreddit, json) {
// 	return {
// 		type: RECEIVE_POSTS,
// 		subreddit,
// 		posts: json.data.children.map(child => child.data),
// 		receivedAt: Date.now()
// }
// export function fetchPosts(subreddit) {
// 	return function (dispatch) {
// 			dispatch(requestPosts(subreddit));
// 			return fetch('http://www.subreddit.com/r/${subreddit}.json')
// 		        .then(response => response.json())
// 		        .then(json =>
//         			dispatch(receivePosts(subreddit, json))
//       )
// 	}
// }