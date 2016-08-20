/**
 * Created by bingoogolapple on 16/8/20.
 */
var mongoose = require('mongoose');

//schema
var CommentSchema = new mongoose.Schema({
    "cid"  : Number,
    "author" : String,
    "text" : String,
    "date" : {
        type: Date,
        default: Date.now
    }
});

//索引
CommentSchema.index({ "cid": 1});

//model
mongoose.model("Comment",CommentSchema);