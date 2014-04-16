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
        url: '/user/:user_id',
        templateUrl: 'views/user/user_main.html'
      })
      .state('message', {
        url: '/user/:user_id/message',
        templateUrl: 'views/user/user_message.html'
      })
      .state('setting', {
        url: '/user/:user_id/setting',
        templateUrl: 'views/user/user_setting.html'
      })
      .state('friends', {
        url: '/user/:user_id/friends',
        templateUrl: 'views/user/user_friends.html'
      })
      .state('resume', {
        url: '/user/:user_id/resume',
        templateUrl: 'views/user/user_resume.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html'
      });

  });