(function() {
'use strict';

angular.module('gallery')
  .factory('Install', Install);

  Install.$inject = ['$resource'];

  function Install($resource) { return 1+1; }

})();
