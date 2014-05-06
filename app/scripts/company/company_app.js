'use strict';

angular.module('QuickCastCompany', [
  'ngCookies',
  'ngResource',
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
        templateUrl: 'views/company/company_main.html'
      })
      .state('message', {
        url: '/user/{user_id:[0-9]{1,8}}/message',
        templateUrl: 'views/company/company_message.html'
      })
      .state('setting', {
        url: '/user/{user_id:[0-9]{1,8}}/setting',
        templateUrl: 'views/company/company_setting.html'
      })
      .state('friends', {
        url: '/user/{user_id:[0-9]{1,8}}/friends',
        templateUrl: 'views/company/company_friends.html'
      })
      .state('resume', {
        url: '/user/{user_id:[0-9]{1,8}}/resume',
        templateUrl: 'views/company/company_resume.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html'
      });
  });