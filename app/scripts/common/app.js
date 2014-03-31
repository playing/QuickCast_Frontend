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
        controller: "CommonCtrl"
      })
    $stateProvider
      .state('index', {
        url: "/",
        templateUrl: "views/main.html",
        controller: "CommonCtrl"
      })
    $stateProvider
      .state('op', {
        url: "/op",
        templateUrl: "views/main.html",
        controller: "CommonCtrl"
      })
    $stateProvider
      .state('404', {
        url: "/404",
        templateUrl: "404.html",
        controller: "CommonCtrl"
      })


  });