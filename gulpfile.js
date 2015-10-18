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
  return gulp.src(paths.styles.src + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest));
});

// gulp.task('js', function() {
//
// });
//
gulp.task('watch', function(){
  gulp.watch(paths.styles.src + '*.scss', ['sass']);
  // gulp.watch(paths.scripts.src + '*.js', ['js']);
});

gulp.task('default', ['sass', 'watch']);

// http://www.browsersync.io/docs/gulp/
// http://www.mikestreety.co.uk/blog/an-advanced-gulpjs-file
