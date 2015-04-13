var gulp      = require('gulp'),
    changed   = require('gulp-changed'),
    concat    = require('gulp-concat'),
    html2js   = require('gulp-html2js'),
    paths     = require('../paths');


gulp.task('html', function() {
  return gulp.src(paths.html.source)
    .pipe(changed(paths.html.output,{extension: '.html'}))
    .pipe(html2js({
    	outputModuleName: 'templates',
    	base: paths.root,
    	rename: function(moduleName){
    		return ''+moduleName.replace('app/', './components/')
    	}
    }))
    .pipe(concat('template.js'))
    .pipe(gulp.dest(paths.html.output+'app/'));
});
