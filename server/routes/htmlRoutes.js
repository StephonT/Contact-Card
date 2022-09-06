//a GET route that uses PATH to allow HTML to be served up by the server in the server/routes/htmlRoutes.js file

const path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
};