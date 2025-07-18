const http = require('http');
const rootModule = require('./module/root_module.js');
const contactModule = require('./module/contact_module.js');
const galleryModule = require('./module/gallery_module.js');
const aboutModule = require('./module/about_module.js');
const nonModule = require('./module/non-existing.js');

const name = "Romero, Smith Dainielle L.";

var server = http.createServer(function (req, res) {
    if (req.url == '/root' || req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(rootModule(name));
        res.end();
    }
    else if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(aboutModule(name));
        res.end();
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(contactModule(name));
        res.end();
    }
    else if (req.url == "/gallery") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(galleryModule());
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(nonModule());
        res.end();
    }
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
console.log('localhost:5000');
//Romero, Smith Dainielle L.
//07-18-2025 
//Section: WD-301