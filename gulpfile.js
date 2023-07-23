const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function styles (){
    return gulp.src('./src/styles/*.scss') // Apenas recuperamos o arquivo ainda não estamos compilando o saa
        .pipe(sass({outputStyle: 'compressed'})) 
        .pipe(gulp.dest('./dist/css'));
}

function images (){
    return gulp.src('./src/images/**/*') // Apenas recuperamos o arquivo ainda não estamos compilando 
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}