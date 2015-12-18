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
        previewPic: 'https://i.imgur.com/PtotLL6.jpg',
        date: "fall 15",
        geo: "los angeles",
        tech: "Three.JS"
      },
      {
        title: 'test',
        artist: 'someone',
        pathName: 'test',
        previewPic: 'https://i.imgur.com/wrbWicL.jpg',
        date: "spring 16",
        geo: "spacelol",
        tech: "Three.JS"
      },
      {
        title: 'honey',
        artist: 'mason',
        pathName: 'honey',
        previewPic: 'https://i.imgur.com/Fdyq3fa.jpg',
        date: "spring 16",
        geo: "HT&E",
        tech: "Three.JS"
      },
      {
        title: 'too many tests',
        artist: "f minus",
        pathName: "fedrox",
        previewPic: "https://i.imgur.com/kEvvMQv.jpg",
        date: "spring 16",
        geo: "spacelol",
        tech: "Three.JS"
      }
    ];

    return installs;
  };

})();
