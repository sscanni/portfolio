var http = require('http');

var handleRequest = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var m1 = "Welcome to Node Training and Fundamentals\n" 
    var m2 = "This is another line\n" 
    //res.end("Welcome to Node Training and Fundamentals\n");
    res.end(m1 + m2);
};

var server = http.createServer(handleRequest);

server.listen(3000, 'localhost');