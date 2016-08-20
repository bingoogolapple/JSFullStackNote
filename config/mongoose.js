/**
 * Created by bingoogolapple on 16/8/20.
 */

var mongoose = require('mongoose');
var config = require('./config')

module.exports = function (callback) {
    console.log('init mongodb...');

    var db = mongoose.connect(config.mongodb);

    mongoose.connection.once('open', function () {
        console.log('connect mongodb success');

        require('../app/model/Comment');

        console.log("init mongodb success");

        callback()
    });

    return db;
}