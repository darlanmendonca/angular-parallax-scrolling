'use strict';

angular
  .module('parallax-scrolling')
  .directive('parallaxScrolling', parallaxScrollingDirective);

function parallaxScrollingDirective() {
  return {
    restrict: 'C',
    link,
  };

  function link(scope, element) {
    parallaxScrolling(element[0]); // eslint-disable-line no-undef
  }
}
