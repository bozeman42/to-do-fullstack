var express = require('express');
var bodyParser = require('body-parser');
var port = 5000;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

var todoRouter = require('./routes/todoRoute.js');
app.use('/todo',todoRouter);

app.listen(port,function(){
  console.log('Listening on port',port);
});