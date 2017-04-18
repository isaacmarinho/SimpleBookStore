/// <binding BeforeBuild='copy-libs' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

var paths = {};
paths.webroot = "wwwroot/";
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "libs/";
paths.main = paths.webroot + "main/";

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
    gulp.src([
        paths.npmSrc + 'rxjs/bundles/Rx.min.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'rxjs'));

    // Bootstrap
    gulp.src([
        paths.npmSrc + 'bootstrap/dist/css/bootstrap.min.css'
    ]).pipe(gulp.dest(paths.main));

    // Systemjs
    gulp.src([
        'Scripts/systemjs.config.js'
    ]).pipe(gulp.dest(paths.main));
});
