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
        url: '/headhunter/:user_id',
        templateUrl: 'views/headhunter/headhunter_main.html',
        controller: "HeadhunterCtrl"
      })
    .state('message', {
      url: '/headhunter/:user_id/message',
      templateUrl: 'views/headhunter/headhunter_message.html',
      controller: "HeadhunterCtrl"
    })

    .state('setting', {
      url: '/headhunter/:user_id/setting',
      templateUrl: 'views/headhunter/headhunter_setting.html',
      controller: "HeadhunterCtrl"
    })

    .state('friends', {
      url: '/headhunter/:user_id/friends',
      templateUrl: 'views/headhunter/headhunter_friends.html',
      controller: "HeadhunterCtrl"
    })

    .state('resume', {
      url: '/headhunter/:user_id/resume',
      templateUrl: 'views/headhunter/headhunter_resume.html',
      controller: "HeadhunterCtrl"
    })
    // $stateProvider
    //   .state('null', {
    //     url: '',
    //     templateUrl: 'views/user/user_main.html',
    //     controller: 'UserCtrl'
    //   })
    .state('404', {
      url: '/404',
      templateUrl: '404.html',
      controller: "HeadhunterCtrl"
    });

  });