var gulp = require('gulp')
var sass = require('gulp-sass')
var swig = require('gulp-swig') 
var cleanCss = require('gulp-clean-css') 
var autoprefixer = require('gulp-autoprefixer') 
var browserSync = require('browser-sync')

gulp.task('sass', function() {
  gulp.src('src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        'iOS >= 7',
        'Android >= 2.0',
      ],
    }))
    .pipe(cleanCss())
    .pipe(gulp.dest('./dist'))
})

gulp.task('swig', function() {
  gulp.src('src/task01_11.html')
    .pipe(swig({
      defaults: { cache: false }
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'dist/',
    },
    files: ['dist/*.html', 'dist/*.css'],
  })
})

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['swig'])
  gulp.watch('src/**/*.scss', ['sass'])
})

gulp.task('build', ['swig', 'sass'])
gulp.task('dev', ['build', 'watch', 'serve'])
