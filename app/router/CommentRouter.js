/**
 * Created by bingoogolapple on 16/8/20.
 */

var CommentController = require('../controller/CommentController');

module.exports = function(app) {
    app.route('/comment')
        .get(CommentController.list)
        .post(CommentController.create);
}