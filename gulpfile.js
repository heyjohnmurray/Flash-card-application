var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var basePaths = {
  src: 'app/src/',
  dest: 'app/dist/'
};

var paths = {
  styles: {
    src: basePaths.src + 'scss/',
    dest: basePaths.dest + 'css/'
  },

  scripts: {
    src: basePaths.src + 'js/',
    dest: basePaths.dest + 'js/'
  }
};

gulp.task('sass', function() {
  return gulp.src(paths.styles.src + '/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src(paths.scripts.src  + '*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
      server: "./"
    });
});

gulp.task('watch', function(){
  gulp.watch(paths.styles.src + '/**/*.scss', ['sass']);
  gulp.watch(paths.scripts.src + '/**/*.js', ['js']);
});

gulp.task('default', ['browser-sync','sass', 'js', 'watch']);
