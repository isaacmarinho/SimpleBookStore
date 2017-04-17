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

gulp.task('copy-libs:angular', function () {
    return gulp.src([
        'node_modules/@angular/**/*.js',
        'node_modules/@angular/**/*.css',
        'node_modules/@angular/**/*.scss'
    ]).pipe(gulp.dest(paths.npmLibs + '@angular'));
});

gulp.task('copy-libs:aim-web-api', function () {
    return gulp.src([
        'node_modules/angular-in-memory-web-api/**/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'angular-in-memory-web-api'));
});

gulp.task('copy-libs:ng2-validation', function () {
    return gulp.src([
        'node_modules/ng2-validation/**/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'ng2-validation'));
});

gulp.task('copy-libs:angular2-cookie', function () {
    return gulp.src([
        'node_modules/angular2-cookie/**/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'angular2-cookie'));
});

gulp.task('copy-libs:bootstrap', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]).pipe(gulp.dest(paths.main));
});

gulp.task('copy-libs:core', function () {
    return gulp.src([
        'node_modules/core-js/client/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'core-js'));
});

gulp.task('copy-libs:reflect', function () {
    return gulp.src([
        'node_modules/reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'reflect-metadata'));
});

gulp.task('copy-libs:systemjs', function () {
    return gulp.src([
       'node_modules/systemjs/dist/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'systemjs'));
});

gulp.task('copy-libs:zonejs', function () {
    return gulp.src([
        'node_modules/zone.js/dist/*.js'
    ]).pipe(gulp.dest(paths.npmLibs + 'zone.js'));
});
