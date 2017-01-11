var gulp = require('gulp'),
    pug = require('gulp-pug2'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');
var compass = require('gulp-compass');

gulp.task('views', function buildHTML() {
    return gulp.src('input/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('../Frontend/pc/html'))
});

gulp.task('watch', function () {
    gulp.watch('input/*.*', ['views']);
    // Endless stream mode
    //return watch('input/*.*', { ignoreInitial: false })
    //    .pipe(pug());
});

//---new Watch---//

var path_new = {
    source: ['./src/html/**/*.pug', '!./src/html/include/**/*.pug'],
    dest: './src/output/html'
};

gulp.task('watch_new', function () {
    gulp.watch('src/**/*.*', ['views_new', 'scss_new']);
    // Endless stream mode
    //return watch('input/*.*', { ignoreInitial: false })
    //    .pipe(pug());
});

gulp.task('views_new', function buildHTML() {
    return gulp.src(path_new.source)
        .pipe(pug())
        .pipe(gulp.dest(path_new.dest))
});
gulp.task('scss_new', function buildHTML() {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({
            compatibility: 'ie8',
            specialComments: 0
        }))
        .pipe(gulp.dest('./src/output/css'))
});
