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

    // vm.isActive = false;
    // vm.activate = activate;

    // function activate() {
    //   vm.isActive = !vm.isActive;
    // }

    function setSelectedInstall(index) {
      vm.selectedInstall = vm.installs[index];
      vm.selectedInstall.index = index;
      vm.installIsSelected = false;
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
