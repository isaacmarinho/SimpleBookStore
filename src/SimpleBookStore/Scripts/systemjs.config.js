/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '../libs/'
        },
        bundles: {
            "../libs/rxjs/Rx.min.js": [
                "rxjs/*",
                "rxjs/symbol/*",
                "rxjs/operator/*",
                "rxjs/observable/*",
                "rxjs/add/operator/*",
                "rxjs/add/observable/*",
                "rxjs/util/*"
            ]
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: './app',
            webapi: '../webapi',

            // angular bundles
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',

            // other libraries
            //'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-validation': 'npm:ng2-validation/bundles/ng2-validation.umd.js',
            'angular2-cookie': 'npm:angular2-cookie',
            'dragula': 'npm:dragula/dragula.min.js',
            'ng2-dragula': 'npm:ng2-dragula/ng2-dragula.umd.min.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js'
            },
            webapi: {
                defaultExtension: 'js'
            },
            'angular2-cookie': {
                main: './core.js',
                defaultExtension: 'js'
            }
            /*rxjs: {
              defaultExtension: 'js'
            }*/
        }
    });
})(this);
