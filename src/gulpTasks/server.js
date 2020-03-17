const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

const server = (cb) => {
    return gulp.src('build')
        .pipe(webserver({
            port: 8081,
            open: true,
            livereload: true
        }))
}


const MA = (cb) => {
    console.log(watch)
    watch('src/**/*.*', () => {
        return gulp.series(
            'appHtml',
            'appCss',
            'appJavascript',
            'appImg'
        )();
    })


    return cb();
}

module.exports = {
    MA,
    server
}