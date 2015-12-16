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
        pathName: 'grave'
      },
      {
        title: 'test',
        artist: 'someone',
        pathName: 'test'
      },
      {
        title: 'blue test',
        artist: 'someone else',
        pathName: 'bluetest'
      }
    ];

    return installs;
  };

})();
