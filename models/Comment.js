/**
 * Created by bingoogolapple on 16/8/20.
 */
var mongoose = require('mongoose');

//schema
var commentSchema = new mongoose.Schema({
    "cid"  : Number,
    "author" : String,
    "text" : String,
    "date" : {
        type: Date,
        default: Date.now
    }
});

//索引
commentSchema.index({ "cid": 1});

//model
var Comment = mongoose.model("Comment",commentSchema);

module.exports = Comment;