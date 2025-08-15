var express = require('express');
var app = express();

app.get ('/', function (req, res) {
    console.log('There is GET request for the Home page.');
    res.send('Here is the GET Method!');
}
);
app.post ('/', function (req, res) {
    console.log('A POST request for the Home page is accessed.');
    res.send('here is the POST Method!');
}
);
app.get('/list_users', function (req, res) {
    console.log('Got a GET request for /list_user.');
    res.send('This is Page Listing.');
}
);
app.get('/ac*cd', function (req, res) {
    console.log('Got a GET request for /ac*cd.');
    res.send('Pattern Match Page.');
});

app.get('/yourprofile', function (req, res) {
    console.log('Got a GET request for /profile.');
    res.send('Name: Romero, Smith Dainielle L. | Age: 20 | Occupation: Student | Section: WD-301 | Description: Web Developer is a tech-savvy professional responsible for designing, coding, and maintaining websites and web applications. They transform user needs and business goals into functional, visually appealing digital experiences. | Hobbies: Reading, Gaming, and Coding');
    res.send('Description: Web Developer is a tech-savvy professional responsible for designing, coding, and maintaining websites and web applications. They transform user needs and business goals into functional, visually appealing digital experiences. | Hobbies: Reading, Gaming, and Coding');});
var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s',host ,port);
}
);
