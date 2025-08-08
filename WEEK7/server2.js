var express = require('express');
var app = express();

app.get('/', (req, res) =>{
  res.send('You have successfully created a second app!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://localhost:%s:%s', host, port);
});

