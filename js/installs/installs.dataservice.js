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
        pathName: 'grave',
        previewPic: 'https://i.imgur.com/PtotLL6.jpg'
      },
      {
        title: 'test',
        artist: 'someone',
        pathName: 'test',
        previewPic: 'https://i.imgur.com/wrbWicL.jpg'
      },
      {
        title: 'blue test',
        artist: 'someone else',
        pathName: 'bluetest',
        previewPic: 'https://i.imgur.com/Fdyq3fa.jpg'
      }
    ];

    return installs;
  };

})();
