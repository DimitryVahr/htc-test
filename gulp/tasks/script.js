module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js/'));
    });
    
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/jscrollpane/script/jquery.mousewheel.js','node_modules/jscrollpane/script/jquery.jscrollpane.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
    $.gulp.task('scripts', function () {
        return $.gulp.src('src/static/js/main.js')
            .pipe($.gulp.dest('build/static/js/'))
            .pipe($.bs.reload({
                stream:true
            }));
    });
}
