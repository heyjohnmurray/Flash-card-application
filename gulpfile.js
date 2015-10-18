var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

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
  return gulp.src(paths.styles.src + '*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
});

// gulp.task('js', function() {
//
// });
//
// gulp.task('watch', function(){
//
// });

gulp.task('default', ['sass']);

// http://www.browsersync.io/docs/gulp/
// http://www.mikestreety.co.uk/blog/an-advanced-gulpjs-file
