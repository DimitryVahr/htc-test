module.exports = function () {
    $.gulp.task('img', function () {
        return $.gulp.src('src/static/img/*/*.{png,jpg,gif}') 
        .pipe($.gp.tinypng('RnBvh0k4vGKkD5HZ1VFLB77gx0FY6XV4'))
        .pipe($.gulp.dest('build/static/img'));
    });
}