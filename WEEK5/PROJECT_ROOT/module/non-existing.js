var footer = require('../module/footer_module.js');

module.exports = function() {
    return `
    <html>
      <head><title>Error 404</title></head>
      <body>
        <h1>Invalid Request. Error 404.</h1>
        ${footer()}
      </body>
    </html>
    `;
};
//Romero, Smith Dainielle L.
//07-18-2025 
//Section: WD-301