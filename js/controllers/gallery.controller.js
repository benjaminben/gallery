var landscape;

(function() {
  'use strict';

  angular.module('gallery')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ["installsDataService", "$scope", "$window", "$log"];

  function GalleryController(installsDataService, $scope, $window, $log) {
    var vm = this;
    vm.message = "HI WORLD HOW ARE YOU?";
    vm.$log = $log;

    // Unique path to each installation
    vm.installs = installsDataService;

    vm.displayHeader = true;
    vm.displayFooter = true;

    vm.midUrl = '';
    vm.selectedInstall = {};
    vm.setSelectedInstall = setSelectedInstall;
    vm.selectedInstall.path;
    vm.setInstallPath = setInstallPath;

    function setSelectedInstall(installTitle, installArtist) {
      vm.selectedInstall = {
        title: installTitle,
        artist: installArtist,
        description: "B-I-G P-O-P-P-A<br>no info<br>for the DEA"
      };
    }

    function setInstallPath(url) {
      vm.selectedInstall.path = 'js/installs/'+ url +'/'+ url +'.html';
    }


    // Listening for window dimensions to determine phone portrait v. landscape
    vm.window = {
      height: $window.innerHeight,
      width:  $window.innerWidth,
      widthIsGreaterThanHeight: function() {
        return this.width > this.height
      }
    };

    landscape = vm.window.widthIsGreaterThanHeight();

    $scope.$on("resize::resize", function(e, width, height) {
      $scope.$apply(function() {
        vm.window.height = height;
        vm.window.width  = width;

        landscape = vm.window.widthIsGreaterThanHeight();
      });
    });
  };

})();
