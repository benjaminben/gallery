(function() {
'use strict';

angular.module("gallery")
  .factory("installsDataService", installsDataService);

  installsDataService.$inject = ["$log"];

  function installsDataService($log) {
    var installs = [
      {
        title: 'The Grave',
        artist: 'mason',
        shorthand: 'grave',
        scriptPath: 'null (for now)'
      },
      {
        title: 'test',
        artist: 'someone',
        shorthand: 'test',
        scriptPath: 'null (for now)'
      }
    ];

    // function getInstalls() {

    // }
    return installs;
  };

})();
