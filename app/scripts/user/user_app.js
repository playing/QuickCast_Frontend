'use strict';

angular.module('QuickCastUser', [
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
        url: '/',
        templateUrl: 'views/user/user_main.html',
        controller: 'UserCtrl'
      })
       .state('null', {
        url: '',
        templateUrl: 'views/user/user_main.html',
        controller: 'UserCtrl'
      })
    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: '404.html',
        controller: 'UserCtrl'
      })

  });