var http = require('http'); //Remember, this is a built - in node module that allows us to create a server
var balance = require('./balance');
http.createServer(function(req, res){ // Callback function
  // Response Head
  res.writeHead(200);
  // Response Body
  res.write(balance.balance() + balance.totalUSD());
  //Send Response to Client
  res.end();
}).listen(5000);
