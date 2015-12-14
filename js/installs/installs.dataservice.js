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
        scriptPath: 'null (for now)'
      },
      {
        title: 'test',
        artist: 'someone',
        scriptPath: 'null (for now)'
      }
    ];

    // function getInstalls() {

    // }
    return installs;
  };

})();
