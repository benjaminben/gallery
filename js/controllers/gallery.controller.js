(function() {
  'use strict';

  angular.module('gallery')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ["installsDataService"];

  function GalleryController(installsDataService) {
    var vm = this;
    vm.message = "HI WORLD HOW ARE YOU?";

    vm.installs = installsDataService;

    vm.displayHeader = true;
    vm.displayFooter = true;

    vm.midUrl = '';
    vm.selectedInstall = {};
    vm.selectedInstall.path;
    vm.setInstallPath = setInstallPath;

    function setInstallPath(url) {
      vm.selectedInstall.path = 'js/installs/'+ url +'/'+ url +'.html';
    }
  };

})();
