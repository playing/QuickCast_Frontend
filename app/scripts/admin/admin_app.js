'use strict';

angular.module('QuickCastAdmin', [
  'ngCookies',
  'ngSanitize',
  'ui.bootstrap',
  'ngAnimate',
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('404');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/admin/admin_main.html',
        controller: "AdminCtrl"
      })
      .state('server', {
        url: '/server',
        templateUrl: 'views/admin/admin_serve.html',
        controller: "AdminCtrl"
      })
      .state('chart', {
        url: '/chart',
        templateUrl: 'views/admin/admin_chart.html',
        controller: "AdminCtrl"
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html',
      });
  });