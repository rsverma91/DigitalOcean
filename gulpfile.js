var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    compass = require('gulp-compass');
    nodemon = require('gulp-nodemon');
module.exports = gulp;

// browser-sync task for starting the server.


gulp.task('compass', function() {
    gulp.src('design/css/*.scss')
        .pipe(compass({
            css: 'design/css',
            sass: 'design/css'
        }).on("error", function(err) {
            console.log("Error at scss file" + err);
        }))
        .pipe(gulp.dest('app/assets/temp'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});
// Default task to be run with `gulp`
gulp.task('default', ['compass', 'browser-sync'], function() {
    gulp.watch("design/css/*.scss", ['compass']);
    gulp.watch(["design/css/*.css", "design/templates/*.html"], ['bs-reload']);
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        files: ["public/**/*.*"],
    });
});
gulp.task('nodemon', function(cb) {

    var started = false;

    return nodemon({
        script: 'server.js'
    }).on('start', function() {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});