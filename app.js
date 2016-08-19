var http = require('http');

var server = http.createServer(function(req, res) {
    //设置头部
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.write("<h1>Hello Docker Node DaoCloud</h1>");
    res.write("<h2>测试自动发布</h2>");
    res.end("<h2>测试端口映射</h2>");
});

server.listen(8888);

console.log('Server running at http://localhost:8888');