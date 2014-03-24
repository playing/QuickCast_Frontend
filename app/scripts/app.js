'use strict';

angular.module('QuickCast', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CommonCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'CommonCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'LoginCtrl',
      })
      .otherwise({
        templateUrl: '404.html',
      });
  });