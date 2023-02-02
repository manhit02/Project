/** Declare module */

const { src, dest, parallel, watch, series } = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync').create()

/** Files Path */
const FilesPath = {
    sassFiles: 'templates/sass/*.scss',
    jsFiles: 'templates/js/*.js',
    htmlFiles: 'templates/pages/*.pug'
}
const { sassFiles, jsFiles, htmlFiles } = FilesPath;

/** Sass Task */
function sassTask() {
    return src(["templates/sass/resetcss.scss", "templates/sass/header.scss", "templates/sass/app.scss", sassFiles])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('style.css'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

/** JS Task */
function jsTask() {
    return src(jsFiles)
        .pipe(concat('index.js'))
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream());


}

/** HTML Task */
function htmlTask() {
    return src("templates/pages/index.pug")
        .pipe(pug({ pretty: true }))
        .pipe(dest('dist/pages'))
        .pipe(browserSync.stream());
}

/** Assets Task */

function assetsTask() {
    return src('templates/assets/*/*')
        .pipe(dest('dist/assets'))
        .pipe(browserSync.stream());


}



/** Watch Task */
function serve() {
    browserSync.init({
        server: {
            baseDir: ['dist/pages', 'dist'],
            index: 'index.html'
        }

    })

    watch(sassFiles, sassTask);
    watch(jsFiles, jsTask);
    watch(htmlFiles, htmlTask);
    watch('templates/assets/*/*', assetsTask);



}


exports.js = jsTask;
exports.sass = sassTask;
exports.html = htmlTask;
exports.assets = assetsTask;

exports.default = series(parallel(htmlTask, sassTask, jsTask, assetsTask));
exports.serve = series(serve, parallel(htmlTask, sassTask, jsTask, assetsTask))