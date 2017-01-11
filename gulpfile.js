var gulp = require('gulp'),
    pug = require('gulp-pug2'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');
//var compass = require('gulp-compass');

//---new Watch---//

var path_new = {
    source: ['./src/html/**/*.pug', '!./src/html/include/**/*.pug'],
    dest: './dist/html'
};

gulp.task('default', function () {
    gulp.watch('src/**/*.*', ['views', 'scss']);
});

gulp.task('views', function buildHTML() {
    return gulp.src(path_new.source)
        .pipe(pug())
        .pipe(gulp.dest(path_new.dest))
});
gulp.task('scss', function buildHTML() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({
            compatibility: 'ie8',
            specialComments: 0
        }))
        .pipe(gulp.dest('./dist/css'))
});
