// https://browsersync.io/docs/gulp

var gulp = require('gulp'),
    sass = require('gulp-sass')
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync').create(); //debemo declarar al final browserSync

// consola: gulp tareaPrueba
gulp.task('tareaPrueba',function(){
    console.log('Tarea de prueba');
});

// browserSync
// consola: gulp serve
gulp.task('serve', ['tareaSass'], function(){
    browserSync.init({
        server: './'
    });
    // mirar uglify
    gulp.watch('./js/main.js',['tareaComprimirJs']);
    // mirar uglify
    gulp.watch('./css/style.css',['tareaComprimirCss']);
    // mirar sass
    gulp.watch('./css/style.scss',['tareaSass']);
    // mirar html
    gulp.watch('./*.html').on('change', browserSync.reload);
})

// sass
gulp.task('tareaSass', function(){
    gulp
        .src('./css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
})

// uglify (minifica js)
gulp.task('tareaComprimirJs', function (cb) {
    pump([
            gulp.src('./js/main.js'),
            uglify(),
            gulp.dest('./js/min/')
        ],
        cb
    );
});

// uglify (minifica css)
gulp.task('tareaComprimirCss', function() {
    return gulp.src('./css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./css/min/'))
        .pipe(browserSync.stream());
});

//watch recibe dos parametros '' archivo a visualizar, [] tareas a ejecutar
// gulp.task('observar',function(){
//     gulp.watch('./css/style.scss',['tareaSass']);
// })