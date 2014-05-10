'use strict';

angular.module('QuickCastUser', [
  'ngCookies',
  'ngSanitize',
  'ui.bootstrap',
  'ngAnimate',
  'ui.router',
  'flow'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('404');
    $stateProvider
      .state('index', {
        url: '/user/{user_id:[0-9]{1,8}}',
        templateUrl: 'views/user/user_main.html'
      })
      .state('message', {
        url: '/user/{user_id:[0-9]{1,8}}/message',
        templateUrl: 'views/user/user_message.html'
      })
      .state('setting', {
        url: '/user/{user_id:[0-9]{1,8}}/setting',
        templateUrl: 'views/user/user_setting.html'
      })
      .state('friends', {
        url: '/user/{user_id:[0-9]{1,8}}/friends',
        templateUrl: 'views/user/user_friends.html'
      })
      .state('resume', {
        url: '/user/{user_id:[0-9]{1,8}}/resume',
        templateUrl: 'views/user/user_resume.html'
      })
      .state('edit', {
        url: '/user/{user_id:[0-9]{1,8}}/resume/edit',
        templateUrl: 'views/user/user_resume_edit.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html'
      });
  });