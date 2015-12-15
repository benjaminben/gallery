(function() {
  'use strict';

  angular
    .module('gallery')
    .controller('InstallController', InstallController);

  InstallController.$inject = ["$log", "$stateParams", "installsDataService"];

  function InstallController($log, $stateParams, installsDataService) {
    var vm = this;
    vm.$log = $log;
    vm.installs = installsDataService;
    vm.selectedInstall = {};
    vm.selectedInstall.title = $stateParams.title;
  }


})();
