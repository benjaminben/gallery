(function() {
  'use strict';

  angular.module('gallery')
    .controller('GalleryController', GalleryController);

  GalleryController.$inject = ["installsDataService"];

  function GalleryController(installsDataService) {
    var vm = this;
    vm.message = "HI WORLD HOW ARE YOU?";

    vm.installs = installsDataService;
  };

})();
