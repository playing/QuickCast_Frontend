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
    $urlRouterProvider.otherwise("/404");
    $stateProvider
      .state('about', {
        url: "/about",
        templateUrl: "views/about.html",
      })
    $stateProvider
      .state('index', {
        url: "/",
        templateUrl: "views/main.html",
      })
    $stateProvider
      .state('opinion', {
        url: "/opinion",
        templateUrl: "views/opinion.html",
      })
    $stateProvider
      .state('404', {
        url: "/404",
        templateUrl: "404.html",
      })
       $stateProvider
      .state('register', {
        url: "/register",
        templateUrl: "views/register.html",
      })
  });