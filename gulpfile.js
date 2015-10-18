var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

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
  return gulp.src(paths.styles.src + 'partials/*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
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
