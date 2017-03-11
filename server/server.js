var server = require('./server_config.js');
var port = 3000;

server.listen(port, function() {
  console.log('007 is listening on ' + port);
});