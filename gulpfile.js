var gulp = require("gulp");
var source = require('vinyl-source-stream');
var reactify =require('reactify');
var browserify =require('browserify');
var concat = require('gulp-concat');
var lint = require("gulp-eslint");

var config = {
    paths:{
        html:'./src/*.html',
        js:'./src/**/*.js',
        mainJs:'./src/main.js',
        css:[
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './src/css/site.css'
            ],
        dist:'./client'
    }
    
};


gulp.task('html',function(){
    gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist));
});
gulp.task('js',function() {
    browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error',console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist+'/script'));
});

gulp.task('css',function() {
    gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist+'/css'));
});



gulp.task('watch',function() {
    gulp.watch(config.paths.html,['html']);
    gulp.watch(config.paths.js,['js']);
});








gulp.task('default',['html','js','css','watch']);

