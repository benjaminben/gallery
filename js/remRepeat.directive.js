(function() {
  'use strict';

  angular
    .module('gallery')
    .directive('remRepeat', remRepeat);

  remRepeat.$inject = ["$window", "$log"];

  function remRepeat($window, $log) {

    var rem = this;

    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          $timeout(function () {
            scope.$emit('ngRepeatFinished');
          });
        }
      }
    }

  }

})();
