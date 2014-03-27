'use strict';

angular.module('QuickCastUser', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
])
  .config(function($routeProvider,$locationProvider) {
    $routeProvider
          .when('/user', {
        templateUrl: 'views/main.html',
        controller: 'UserCtrl'
      })
      .when('/user.html', {
        redirectTo: '/user'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'UserCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'UserCtrl',
      })
      .otherwise({
        templateUrl: '404.html',
      });
            $locationProvider.html5Mode(true);
  });