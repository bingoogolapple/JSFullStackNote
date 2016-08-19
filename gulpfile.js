/**
 * Created by bingoogolapple on 16/6/23.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './public'
        },
        files: ['index.html', 'app/**\/*.js']
    });
});

gulp.task('default', ['browser-sync']);