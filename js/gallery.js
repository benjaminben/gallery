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
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('install', {
        url: '/install/:title',
        templateUrl: 'templates/install.html',
        controller: 'InstallController',
        controllerAs: 'install'
      });
  };


// any need for ng-resource?
// if so:   <script src="https://code.angularjs.org/1.4.8/angular-resource.min.js"></script>


})();
