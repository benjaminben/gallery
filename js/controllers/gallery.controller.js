var landscape;

(function() {
  'use strict';

  angular.module('gallery')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ["installsDataService", "$scope", "$window", "$log", "$location", "$anchorScroll", "$timeout", "$q"];

  function GalleryController(installsDataService, $scope, $window, $log, $location, $anchorScroll, $timeout, $state, $q) {
    var vm = this;
    vm.message = "HI WORLD HOW ARE YOU?";
    vm.$log = $log;
    vm.on = $scope.$on();

    vm.installIsSelected = false;

    // Unique path to each installation
    vm.installs = installsDataService;

    vm.displayHeader = false;
    vm.displayFooter = true;

    vm.selectedInstall = {};
    vm.setSelectedInstall = setSelectedInstall;
    vm.selectedInstall.path;
    vm.setInstallPath = setInstallPath;
    vm.deselectInstall = deselectInstall;
    vm.scrollToInstall = scrollToInstall;

    $scope.$on('lobbyLoaded', function(ngRepeatFinishedEvent) {
      createLobbyInstalls();
    });

    vm.audio;
    vm.installAudioPath;
    vm.installAudioSet = installAudioSet;
    vm.installAudioClear = installAudioClear;

    vm.slidePosition = "slide0";

    vm.activeInstall = 'activeInstall';
    vm.activeInstallMini = 'activeInstallMini';

    function setSelectedInstall(index) {
      vm.selectedInstall = vm.installs[index];
      vm.selectedInstall.index = index;
      vm.installIsSelected = true;
      vm.slidePosition = "slide" + index;
      vm.installAudioSet();
    }

    function setInstallPath(url) {
      vm.selectedInstall.path = 'js/installs/'+ url +'/'+ url +'.html';
     console.log(vm.selectedInstall.path);
    }

    function deselectInstall() {
      console.log("guuurrl");
      vm.selectedInstall = {};
      vm.installIsSelected = false;
    }

    function scrollToInstall() {
      $location.hash(vm.selectedInstall);
      $anchorScroll;
    }

    // Listening for window dimensions to determine phone portrait v. landscape
    vm.window = {
      height: $window.innerHeight,
      width:  $window.innerWidth,
      widthIsGreaterThanHeight: function() {
        return this.width > this.height
      }
    };

    function installAudioSet() {
      if (vm.selectedInstall.audio) {
        vm.installAudioPath = vm.selectedInstall.audio
      } else {
        vm.installAudioPath = null;
      }
    }

    function installAudioClear() {
      vm.installAudioPath = null;
    }

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
