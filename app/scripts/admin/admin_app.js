'use strict';

angular.module('QuickCastAdmin', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ngAnimate',
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('404');
    $stateProvider
      .state('index', {
        url: '/admin',
        templateUrl: 'views/admin/admin_main.html',
        controller: "AdminCtrl"
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html',
        controller: "AdminCtrl"
      });

  });