var footer = require('../module/footer_module.js');

module.exports = function() {
    return `
    <html>
      <head><title>Gallery</title></head>
      <body>
        <h1>This is the Gallery Page</h1>
        <nav>
          <a href="/">Home</a> |
          <a href="/about">About</a> |
          <a href="/contact">Contact</a> |
          <a href="/gallery">Gallery</a>
        </nav>
        ${footer()}
      </body>
    </html>
    `;
};
//Romero, Smith Dainielle L.
//07-18-2025 
//Section: WD-301