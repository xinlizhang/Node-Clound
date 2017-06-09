var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/site_num/:id?', function (req, res) {
// 	// res.send(req.query.idn);
// });

module.exports = router;
