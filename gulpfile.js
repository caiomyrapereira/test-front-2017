const gulp = require('gulp');
const { series, parallel } = gulp;

const { appHtml, appCss, appJavascript, appImg } = require('./src/gulpTasks/app');
const { depsCss, depsFonts } = require('./src/gulpTasks/deps');
const { MA, server } = require('./src/gulpTasks/server');

console.log(appImg)

exports.default = series(
    parallel(
        series(appHtml, appCss, appJavascript, appImg),
        series(depsCss, depsFonts)
    ),
    server,
    MA
);