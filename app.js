var http = require('http');
var requestHandler = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Docker Node DaoCloud\n');
}
var web = http.createServer(requestHandler);
web.listen(80);
console.log('Server running at http://localhost:80');