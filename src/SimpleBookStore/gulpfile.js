/// <binding BeforeBuild='copy-libs, run-once' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var fs = require('fs');
var systemjsBuilder = require('systemjs-builder');

gulp.task('default', function () {
    // place code for your default task here
});

var paths = {};
paths.webroot = "wwwroot/";
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "libs/";

gulp.task('copy-libs', function () {
    // Angular
    gulp.src([
        paths.npmSrc + '@angular/**/*.js',
        paths.npmSrc + '@angular/**/*.css',
        paths.npmSrc + '@angular/**/*.scss'
    ]).pipe(gulp.dest(paths.npmLibs + '@angular'));
    gulp.src([
        paths.npmSrc + 'angular-in-memory-web-api/**/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'angular-in-memory-web-api'));
    gulp.src([
        paths.npmSrc + 'ng2-validation/**/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'ng2-validation'));
    gulp.src([
        paths.npmSrc + 'angular2-cookie/**/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'angular2-cookie'));

    // Angular dependencies
    gulp.src([
        paths.npmSrc + 'core-js/client/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'core-js'));
    gulp.src([
        paths.npmSrc + 'reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'reflect-metadata'));
    gulp.src([
       paths.npmSrc + 'systemjs/dist/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'systemjs'));
    gulp.src([
        paths.npmSrc + 'zone.js/dist/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'zone.js'));

    // Bootstrap
    gulp.src([
        paths.npmSrc + 'bootstrap/dist/css/bootstrap.min.css'
    ]).pipe(gulp.dest(paths.webroot));

    // Systemjs
    gulp.src([
        'Scripts/systemjs.config.js'
    ]).pipe(gulp.dest(paths.webroot));
});

gulp.task('clean', function (cb) {
    del([paths.npmLibs + '/*', paths.webroot + 'bootstrap.min.css', paths.webroot + 'systemjs.config.js']);
})

function bundleRxJS(finishCb) {
    var builder = new systemjsBuilder('./', {
        paths: { "rxjs/*": "./node_modules/rxjs/*.js" },
        map: { "rxjs": "./node_modules/rxjs" },
        packages: { "rxjs": { main: 'Rx.js', defaultExtension: "js" } }
    });

    builder.bundle('rxjs', './wwwroot/libs/rxjs/Rx.min.js', {
        sourceMaps: true,
        minify: true,
        mangle: true
    }).then(function () { finishCb(); }, finishCb);
}

gulp.task('bundle:rxjs', function (finishCb) {
    bundleRxJS(finishCb);
});

gulp.task('run-once', function (finishCb) {
    // Bundle Rx only if not bundled.
    fs.stat('./wwwroot/libs/rxjs/Rx.min.js', function (err, stat) {
        if (err != null) {
            bundleRxJS(finishCb);
        }
        else finishCb();
    });
});