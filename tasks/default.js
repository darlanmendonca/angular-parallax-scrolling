'use strict';

let gulp = require('gulp');

let tasks = [
  'styles',
  'vendorJS',
  'scripts',
  'templates',
  'browser-sync',
  'watch',
];

gulp.task('default', tasks);
