/**
 * Created by bingoogolapple on 16/6/23.
 */
var express = require("./config/express");
var mongodb = require("./config/mongoose")

mongodb(function () {
    express();
});