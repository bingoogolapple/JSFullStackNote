var mongoose = require('mongoose');

// var uri = 'mongodb://username:password@hostname:port/databasename';
// 省略用户名和密码就是不需要验证，省略端口号默认使用27017
// var uri = 'mongodb://localhost/js-full-stack-note';

var uri = 'mongodb://uKoCTPZsHWN4jwaE:pgpLPSH94Cf8O27bI@10.10.72.139:27017/5QkhpWEPNAbazH4w';

mongoose.connect(uri);

var db = mongoose.connection;

db.once('open', function (err, callback) {
    console.log("数据库成功打开");
});

module.exports = db;