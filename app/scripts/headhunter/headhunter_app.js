'use strict';

angular.module('QuickCastHeadhunter', [
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
        url: '/user/{user_id:[0-9]{1,8}}',
        templateUrl: 'views/headhunter/headhunter_main.html'
      })
      .state('message', {
        url: '/user/{user_id:[0-9]{1,8}}/message',
        templateUrl: 'views/headhunter/headhunter_message.html'
      })
      .state('setting', {
        url: '/user/{user_id:[0-9]{1,8}}/setting',
        templateUrl: 'views/headhunter/user_setting.html'
      })
      .state('friends', {
        url: '/user/{user_id:[0-9]{1,8}}/friends',
        templateUrl: 'views/headhunter/headhunter_friends.html'
      })
      .state('resume', {
        url: '/user/{user_id:[0-9]{1,8}}/resume',
        templateUrl: 'views/headhunter/headhunter_resume.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html'
      });

  });