var express = require("express"),
	http = require('http');
var app = express();
var router = express.Router();

router.get('/', function(req, res) {
  res.render('indexPage', { title: 'Test React run' });
});

// var server = http.createServer(app);
// var io = require('socket.io').listen(server);

// server.listen(4000);
// var count = 0;
// io.on('connection', function(socket){
// 	count++;
// 	console.log('User connected' + count + 'user(s) present');
// 	socket.emit('users',{number:count});
// 	socket.broadcast.emit('users',{number:count});

// 	socket.on('disconnect', function(){
// 	    count--;
// 	    console.log('User disconnected');
// 	    socket.broadcast.emit('users',{number:count});
// 	});

// 	socket.on('message',function(data){
//         socket.broadcast.emit('push message',data);
//     })

// });


    // "watch": "webpack-dev-server --hot",
    //  "postinstall": "bower install && gulp build"
module.exports = router;
