var express = require('express');
var router = express.Router();
var cfenv = require("cfenv");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('admin', { title: 'Admin' });
});


// config db from clound
var mydb;

/* Endpoint to greet and add a new visitor to database.
* Send a POST request to localhost:3000/api/visitors with body
* {
* 	"name": "Bob"
* }
*/
router.post("/api/visitors", function (request, response) {
  var userName = request.body.name;
  var ages = request.body.ages;
  if(!mydb) {
    console.log("No database.");
    response.send("Hello " + userName + "!" + 'Your messages is '+ ages);
    return;
  }
  // insert the username as a document
  mydb.insert({ "name" : userName, "ages" : ages}, function(err, body, header) {
    if (err) {
      return console.log('[mydb.insert] ', err.message);
    }
    response.send("Hello " + userName + 'Your messages is '+ ages + "! I added you to the database.");
  });

});



router.get("/api/visitors", function (request, response) {
  var names = [];
  if(!mydb) {
    response.json(names);
    return;
  }
  mydb.list({ include_docs: true }, function(err, body) {
    if (!err) {
      body.rows.forEach(function(row) {
        if(row.doc.name)
          names.push(row.doc.name + ' messages is ' + row.doc.ages);
      });
      response.json(names);
    }
  });
});

var vcapLocal;
try {
  vcapLocal = require('../vcap-local.json');
  console.log("Loaded local VCAP", vcapLocal);
} catch (e) {
	console.log(vcapLocal);
 }

const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}
const appEnv = cfenv.getAppEnv(appEnvOpts);

if (appEnv.services['cloudantNoSQLDB']) {
  // Load the Cloudant library.
  var Cloudant = require('cloudant');

  // Initialize database with credentials
  var cloudant = Cloudant(appEnv.services['cloudantNoSQLDB'][0].credentials);

  //database name
  var dbName = 'mydb';

  // Create a new "mydb" database.
  cloudant.db.create(dbName, function(err, data) {
    if(!err) //err if database doesn't already exists
      console.log("Created database: " + dbName);
  });

  // Specify the database we are going to use (mydb)...
  mydb = cloudant.db.use(dbName);
}

module.exports = router;

