var landscape;

(function() {
  'use strict';

  angular.module('gallery')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ["installsDataService", "$scope", "$window", "$log", "$location", "$anchorScroll", "$timeout", "$q"];

  function GalleryController(installsDataService, $scope, $window, $log, $location, $anchorScroll, $timeout, $state, $q) {
    var vm = this;
    vm.message = '"look around"';
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

    vm.$location = $location;
    vm.currentLocation = vm.$location.$$absUrl;
    vm.currentInstallUrl;

    vm.goHome = goHome;
    vm.leaveHome = leaveHome;

    function goHome() {
      vm.displayHeader = false;
      vm.displayFooter = true;
    }

    function leaveHome() {
      vm.displayHeader = false;
      vm.displayFooter = true;
    }

    vm.audio;
    vm.installAudioPath;
    vm.installAudioSet = installAudioSet;
    vm.installAudioClear = installAudioClear;

    vm.showModal = false;
    vm.modalTop = "";
    vm.modalBottom = "";
    vm.setModal = setModal;

    vm.shareURL;
    vm.shareMessage = "share link for warm fuzzies!:"

    vm.activeInstall = 'activeInstall';
    vm.activeInstallMini = 'activeInstallMini';

    function setSelectedInstall(index) {
      clearAudio();
      vm.showModal = false;
      vm.selectedInstall = vm.installs[index];
      vm.selectedInstall.index = index;
      vm.installIsSelected = true;
      vm.installAudioSet();
    }

    function setModal(top, bottom) {
      vm.modalTop = top;
      vm.modalBottom = bottom;
    }

    function setInstallPath(url) {
      vm.selectedInstall.path = 'js/installs/'+ url +'/'+ url +'.html';
    }

    function deselectInstall() {
      vm.selectedInstall = {};
      vm.installIsSelected = false;
      vm.showModal = false;
      clearAudio();
    }

    function scrollToInstall(path) {
      var newHash = path;
      if ($location.hash() !== newHash) {
        $location.hash(path)
        vm.$log.log($location)
      } else {
        $anchorScroll();
        vm.$log.log($location)
      }
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
        vm.showModal = false;
      });
    });

  };

})();
