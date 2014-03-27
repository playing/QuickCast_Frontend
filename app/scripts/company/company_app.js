'use strict';

angular.module('QuickCastCompany', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function($routeProvider,$locationProvider) {
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
        controller: 'CommonCtrl',
      })
      .otherwise({
        templateUrl: '404.html',
      });
            $locationProvider.html5Mode(true);
  });