var footer = require('./footer_module.js');
module.exports = function(name) {
    return `
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome, to my Node.js Application</h1>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a> |
          <a href="/gallery">Gallery</a>
        </nav>
        <p>Welcome ${name}. This is an activity about basics of Node.js</p>
        ${footer()}
      </body>
    </html>
    `;
};
//Romero, Smith Dainielle L.
//07-18-2025 
//Section: WD-301