(function() {
'use strict';

angular.module("gallery")
  .factory("installsDataService", installsDataService);

  installsDataService.$inject = ["$log"];

  function installsDataService($log) {
    var installs = [
      {
        title: 'suck it up.',
        artist: 'BB',
        pathName: 'suckitup',
        previewPic: 'assets/installs/previews/suckitup.png',
        date: "winter 16",
        geo: "los angeles",
        tech: "Three.JS"
      },
      {
        title: 'honey',
        artist: 'mason',
        pathName: 'honey',
        previewPic: 'assets/installs/previews/honey.jpg',
        date: "fall 15",
        geo: "HT&E",
        tech: "Three.JS",
        audio: "js/installs/honey/sound/honey.mp3",
        av: "MUNA - 'Honey'"
      },
      {
        title: 'band geek',
        artist: 'mason',
        pathName: 'grave',
        previewPic: 'assets/installs/previews/grave.jpg',
        date: "fall 15",
        geo: "los angeles",
        tech: "Three.JS",
        audio: "js/installs/grave/sound/sourgirl.mp3",
        av: "STP - 'Sour Girl'"
      },
      {
        title: 'hashtag_',
        artist: "f minus",
        pathName: "hashtag_",
        previewPic: "assets/installs/previews/hashtag_.png",
        date: "spring 16",
        geo: "spacelol",
        tech: "Instagram, Three.JS"
      }
    ];

    return installs;
  };

})();
