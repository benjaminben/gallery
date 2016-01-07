(function() {
'use strict';

angular.module("gallery")
  .factory("installsDataService", installsDataService);

  installsDataService.$inject = ["$log"];

  function installsDataService($log) {
    var installs = [
      {
        title: 'honey',
        artist: 'mason',
        pathName: 'honey',
        previewPic: 'assets/installs/previews/honey.jpg',
        date: "spring 16",
        geo: "HT&E",
        tech: "Three.JS",
        audio: "js/installs/honey/sound/honey.mp3"
      },
      {
        title: 'band geek',
        artist: 'mason',
        pathName: 'grave',
        previewPic: 'assets/installs/previews/grave.jpg',
        date: "fall 15",
        geo: "los angeles",
        tech: "Three.JS",
        audio: "js/installs/grave/sound/sourgirl.mp3"
      },
      {
        title: 'SRiS',
        artist: 'da undagrnd',
        pathName: 'test',
        previewPic: 'assets/installs/previews/sris.png',
        date: "winter 20",
        geo: "roxville, MW",
        tech: "Three.JS",
      },
      {
        title: 'too many tests',
        artist: "f minus",
        pathName: "fedrox",
        previewPic: "assets/installs/previews/fedrox.jpg",
        date: "spring 16",
        geo: "spacelol",
        tech: "Three.JS",
      }
    ];

    return installs;
  };

})();
