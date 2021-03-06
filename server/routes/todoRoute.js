var express = require('express');
var pg = require('pg');

var router = express.Router();
var config = {
  database: 'aaron', // the name of the database
  host: 'localhost', // where is your database?
  port: 5432, // the port number for you database, 5432 is the default
  max: 10, // how many connections at one time
  idleTimeoutMillis: 30000 // Close idle connections to db after
};

var pool = new pg.Pool(config);

router.get('/',function(req,res){
  console.log('GET request received');
  res.send("Heeeeeeey");
});

module.exports = router;