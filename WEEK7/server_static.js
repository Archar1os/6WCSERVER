const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.send('You have successfully created a second app!')
});
app.listen(8081, function () {
    var host = this.address().address;
    var port = this.address().port;
    console.log('Server running at http://%s:%s', host, port);
});