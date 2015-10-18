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
    dest: basePaths.dest + 'css'
  },

  scripts: {
    src: basePaths.src + 'js/',
    dest: basePaths.dest + 'js/'
  }
};

gulp.task('sass', function() {
  return gulp.src('');
});

gulp.task('js', function() {

});

gulp.task('watch', function(){

});

gulp.task('default', function() {
  // place code for your default task here
});


// http://www.browsersync.io/docs/gulp/
http://www.mikestreety.co.uk/blog/an-advanced-gulpjs-file
