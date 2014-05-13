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
      })
      .state('job', {
        url: '/job/{job_id:[0-9]{1,8}}',
        templateUrl: 'views/search/search_job.html',
      })
      .state('member', {
        url: '/member/{user_id:[0-9]{1,8}}',
        templateUrl: 'views/search/search_member.html',
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html',
      });
  });