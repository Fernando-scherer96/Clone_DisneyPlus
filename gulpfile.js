const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function styles (){
    return gulp.src('./src/styles/*.scss') // Apenas recuperamos o arquivo ainda não estamos compilando o 
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}