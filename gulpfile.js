var gulp = require('gulp'),             //core
    pug = require('gulp-pug2'),         //pug -> HTML
    watch = require('gulp-watch'),      //watch file change and trigger
    sass = require('gulp-sass'),        //scss -> CSS
    cleanCSS = require('gulp-clean-css'),   //minify css
    strip = require('gulp-strip-comments'), //strip comments from files
    autoprefixer = require('gulp-autoprefixer');
var html2pug = require('gulp-html2pug');


//var compass = require('gulp-compass');

var path_new = {
    source: ['./src/html/**/*.pug', '!./src/html/include/**/*.pug'],
    dest: './dest/html'
};

gulp.task('default', function () {
    gulp.watch('src/**/*.*', ['views', 'scss']);
});

gulp.task('views', function buildHTML() {
    return gulp.src(path_new.source)
        .pipe(pug())
        .pipe(strip())
        .pipe(gulp.dest(path_new.dest))
});
gulp.task('scss', function buildHTML() {
    return gulp.src([
        './src/scss/**/*.scss',
        '!./src/scss/include/**/*.scss'
    ])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(cleanCSS({
        //     compatibility: 'ie8',
        //     specialComments: 0
        // }))
        .pipe(gulp.dest('./dest/css'))
});

gulp.task('script', function () {
   return gulp.src('./src/js/**/*.js')
       .pipe(gulp.dest('./dest/js'));
});

gulp.task('html2pug', function() {
    // Backend locales
    return gulp.src('./import/html/**/*.html')
        .pipe(html2pug())
        .pipe(gulp.dest('./src/html'));
});
