const gulp = require('gulp');
const { series, parallel } = gulp;
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin')

const appHtml = () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('build'))
}

const appCss = () => {
    return gulp.src('src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
}

const appJavascript = () => {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest('build/js'));
}

const appImg = () => {
    return gulp.src([
            'src/img/**/*.png',
            'src/img/**/*.jpg',
            'src/img/**/*.gif',
            'src/**/*.jpeg'
        ])
        .pipe(gulp.dest('build/img'))
}

gulp.task('appHtml', appHtml);
gulp.task('appCss', appCss);
gulp.task('appJavascript', appJavascript);
gulp.task('appImg', appImg);

module.exports = {
    appHtml,
    appCss,
    appJavascript,
    appImg
};