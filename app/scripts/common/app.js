'use strict';

angular.module('QuickCast', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ngAnimate',
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
      .state('null', {
        url: '',
        templateUrl: 'views/main.html',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
      })
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
      })
      .state('opinion', {
        url: '/opinion',
        templateUrl: 'views/opinion.html',
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html',
      })
      .state('register', {
        url: '/reg/register',
        templateUrl: 'views/register.html',
      })
      .state('profile', {
        url: '/reg/profile',
        templateUrl: 'views/profile.html',
      });
  });