(function() {

  'use strict';

  angular
    .module('gallery', ['ui.router', 'ngAnimate'])
    .config(router)
    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onFinishRender);
                    });
                }
            }
        }
    });

  router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function router ($stateProvider, $urlRouterProvider, $locationProvider) {
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
        templateUrl: 'templates/lobby/lobby.html',
        reload: true
      });
  };

})();
