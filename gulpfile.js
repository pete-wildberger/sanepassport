const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');

let jsFiles = [
  'public/scripts/app.module.js',
  'public/scripts/app.config.js',
  'public/scripts/controllers/login.controller.js',
  'public/scripts/controllers/register.controller.js',
  'public/scripts/services/http.Service.js'

];

//tasks
gulp.task('default', () => {
  console.log('scripts ran');
  gulp
    .src(jsFiles)
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/app'));
});

//
// gulp.task('watch:default', () => {
//   gulp.watch(jsFiles, ['default']);
// });
//
// //default task
// gulp.task('default', ['watch:default']);
