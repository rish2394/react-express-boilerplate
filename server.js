var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/about', function(req, res) {
  res.json('hello');
})
app.listen(3000, function() {
  console.log('server started listening on port 3000');
})
