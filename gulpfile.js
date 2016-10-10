'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');
var pump = require('pump');
var istanbul = require('gulp-istanbul');
var eslint = require('gulp-eslint');

gulp.task('coverage', function() {
  return gulp.src(['index.js'])
		.pipe(istanbul({includeUntested: true}))
		.pipe(istanbul.hookRequire());
});

gulp.task('mocha', ['coverage'], function() {
  return gulp.src('test/tests.js')
		.pipe(mocha())
		.pipe(istanbul.writeReports());
});

gulp.task('eslint', function() {
  return gulp.src(['index.js'])
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('compress', function (cb) {
	pump([
			gulp.src('index.js'),
			uglify(),
			gulp.dest('dist')
		],
		cb
	);
});

gulp.task('init', ['mocha', 'eslint']);
