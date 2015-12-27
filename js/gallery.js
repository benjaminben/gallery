(function() {

  'use strict';

  angular
    .module('gallery', ['ui.router'])
    .config(router);

  router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function router ($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
      .state('install', {
        url: '/install/:title',
        templateUrl: 'templates/install.html',
        controller: 'InstallController',
        controllerAs: 'install'
      })
      .state('lobby', {
        url: '/lobby',
        templateUrl: 'templates/lobby.html'
      });
  };

})();
