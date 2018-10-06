let del = require('del')
let fs = require('fs-extra')
let gulp = require('gulp')
let ts = require('gulp-typescript')
let uglify = require('gulp-uglify')

const packageJson = fs.readJSONSync('./package.json')

const paths = {
  server: {
    src: ['./src/events/*.ts', './src/interfaces/*.ts', './src/models/*.ts', './src/routes/*.ts'],
    dest: './dist/'
  }
}

let build = () => {
  return gulp.src(paths.server.src, { sourcemaps: true })
    .pipe(ts.createProject({ declaration: true })())
    .pipe(uglify())
    // .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.server.dest));
}

let watch = () => {
  gulp.watch(paths.scripts.src, gulp.series(clean, build, copy))
}

let clean = () => { return del(["./dist/**"]) }

let copy = gulp.parallel(
  () => {
    return gulp.src('./src/views/**/*.*', { "base": "src" }).pipe(gulp.dest('./dist/'))
  }
  , () => {
    return gulp.src('config.json', { "base": "." }).pipe(gulp.dest('./dist/'))
  }
)

gulp.task('build', build)
gulp.task('clean', clean)
gulp.task('copy', copy)
gulp.task('default', gulp.series(clean, build, copy))
gulp.task('watch', watch)