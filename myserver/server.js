var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/search-artists', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Content-Type', 'application/json; charset=utf-8');

  console.log('REQ_PARAMS-', req.query);
  var url = `http://itunes.apple.com/search?term=${req.query.term}&entity=musicArtist`;
  console.log('URL-', url);

  request(url, function(error, response, body) {
    console.log('ERROR-', error);
    console.log('RESPONSE-', response);
    console.log('BODY-', body);

    if(error) {
      console.log('ERROR-', error);
      res.send(error);
    } else {
      console.log('RESPONSE_BODY-', body);
      res.send(body);
    }
  });
});

app.get('/artist-albums', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Content-Type', 'application/json; charset=utf-8');

  console.log('REQ_PARAMS-', req.query);
  var url = `http://itunes.apple.com/lookup?id=${req.query.id}&entity=album`;

  request(url, function(error, response, body) {
    if(error) {
      console.log('ERROR-', error);
      res.send(error);
    } else {
      console.log('RESPONSE_BODY-', body);
      res.send(body);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
