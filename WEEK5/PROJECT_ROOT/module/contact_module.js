var footer = require('../module/footer_module.js');

module.exports = function(name) {
    return `
    <html>
      <head><title>Contact</title></head>
      <body>
        <h1>This is the Contact Page</h1>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a> |
          <a href="/gallery">Gallery</a>
        </nav>
        <p>${name}, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/node.js-tutorials.</p>
        ${footer()}
      </body>
    </html>
    `;
};
//Romero, Smith Dainielle L.
//07-18-2025  
//Section: WD-301