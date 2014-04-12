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
        templateUrl: 'views/user/user_main.html',
        controller: 'UserCtrl'
      })
    $stateProvider
      .state('message', {
        url: '/user/:user_id/message',
        templateUrl: 'views/user/user_message.html',
        controller: 'UserCtrl'
      })
    $stateProvider
      .state('setting', {
        url: '/user/:user_id/setting',
        templateUrl: 'views/user/user_setting.html',
        controller: 'UserCtrl'
      })
    $stateProvider
      .state('friends', {
        url: '/user/:user_id/friends',
        templateUrl: 'views/user/user_friends.html',
        controller: 'UserCtrl'
      })
    $stateProvider
      .state('resume', {
        url: '/user/:user_id/resume',
        templateUrl: 'views/user/user_resume.html',
        controller: 'UserCtrl'
      })
    // $stateProvider
    //   .state('null', {
    //     url: '',
    //     templateUrl: 'views/user/user_main.html',
    //     controller: 'UserCtrl'
    //   })
    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: '404.html',
        controller: 'UserCtrl'
      })

  });