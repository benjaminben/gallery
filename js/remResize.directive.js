(function() {
  'use strict';

  angular
    .module('gallery')
    .directive('remResize', remResize);

  remResize.$inject = ["$window", "$log"];

  function remResize($window, $log) {

    var rem = this;

    return {
      link: function(rem) {
        angular.element($window).on('resize', function(e) {
          var currentHeight = e.target.innerHeight;
          var currentWidth = e.target.innerWidth;
          rem.$broadcast('resize::resize', currentWidth, currentHeight);
        });
      }
    };

  }

})();
