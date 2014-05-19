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
      })
      .state('server', {
        url: '/server',
        templateUrl: 'views/admin/admin_serve.html',
      })
      .state('chart', {
        url: '/chart',
        templateUrl: 'views/admin/admin_chart.html',
      })
      .state('notice', {
        url: '/notice',
        templateUrl: 'views/admin/admin_notice.html',
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html',
      });
  });