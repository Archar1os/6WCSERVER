var footer = require('./footer_module.js');
module.exports = function() {
    return `
    <html>
      <head><title>404 - Page Not Found</title></head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p></p>
        ${footer()}
      </body>
    </html>
    `;
};
//Romero, Smith Dainielle L.
//07-18-2025 
//Section: WD-301