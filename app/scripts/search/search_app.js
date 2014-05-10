'use strict';

angular.module('QuickCastSearch', [
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
        templateUrl: 'views/search/search_main.html',
        controller: 'SearchCtrl'
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html',
      });
  });