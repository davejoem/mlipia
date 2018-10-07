const del = require('del')
  , fs = require('fs-extra')
  , gulp = require('gulp')
  , push = require('git-push')
  , terser = require('gulp-terser')
  , ts = require('gulp-typescript')
  , packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
  , tsProject = ts.createProject("./tsconfig.json")
  , paths = {
    server: {
      src: ['./src/events/*.ts', './src/interfaces/*.ts', './src/models/*.ts', './src/routes/*.ts'],
      dest: './dist'
    }
  }
  , build = () => {
    return tsProject.src()
      .pipe(tsProject())
      .js.pipe(
        terser({
          compress: {}
          , mangle: {
            eval: false
            , keep_classnames: false
            , keep_fnames: false
            , module: false
            , reserved: []
            , toplevel: true
            , safari10: true
          }
        })
      )
      // .pipe(concat('main.min.js'))
      .pipe(gulp.dest(paths.server.dest));
  }
  , clean = () => { return del(["./dist/**"]) }
  , copy = gulp.parallel(
    () => {
      return gulp.src('./src/views/admin/dist/**/*.*', { "base": "./src/views/admin/dist/" }).pipe(gulp.dest('./dist/views/admin/'))
    }
    ,
    () => {
      return gulp.src('./src/views/client/**/*.*', { "base": "./src/views/client" }).pipe(gulp.dest('./dist/views/client/'))
    }
    , () => {
      return gulp.src('./src/config.json', { "base": "src" }).pipe(gulp.dest('./dist/'))
    }
  )
  , deploy = () => {
    return push('./', { name: `production`, url: `git@heroku.com:mlipia.git`, branch: `master` }, function () {
      console.log('Deployed to heroku!')
    })
  }
  , sync = () => {
    return push('./', { name: `production`, url: `git@bitbucket.org:davejoem/mlipia.git`, branch: `master` }, function () {
      console.log('Synced to bitbucket!')
    })
  }
  , watch = () => {
    gulp.watch(paths.server.src, gulp.series(clean, build, copy))
  }

gulp.task('build', build)
gulp.task('clean', clean)
gulp.task('copy', copy)
gulp.task('default', gulp.series(clean, build, copy, sync, deploy))
gulp.task('deploy', deploy)
gulp.task('sync', sync)
gulp.task('watch', watch)
