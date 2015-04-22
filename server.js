var express = require('express');
var morgan = require('morgan');
var app = express();
var bodyParser = require('body-parser');
var tokenGenerator = require('./tokenGenerator.js');
var tokenCache = {};
var port = process.env.PORT || 8000;
console.log(__dirname)
app.use(express.static(__dirname));
console.log('pos')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.post('/users', function(req, res) {
  var newToken = tokenGenerator(req.user, tokenCache)
  tokenCache[newToken] = newToken;
  res.user.session = newToken
  res.send('new token created for: ', req.user)

})
app.listen(port);
console.log('listening to : ', port)