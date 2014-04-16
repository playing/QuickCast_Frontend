'use strict';

angular.module('QuickCastCompany', [
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
        url: '/company/:user_id',
        templateUrl: 'views/company/company_main.html',
        controller: "CompanyCtrl"
      })

    .state('message', {
      url: '/company/:user_id/message',
      templateUrl: 'views/company/company_message.html',
      controller: "CompanyCtrl"
    })

    .state('setting', {
      url: '/company/:user_id/setting',
      templateUrl: 'views/company/company_setting.html',
      controller: "CompanyCtrl"
    })

    .state('friends', {
      url: '/company/:user_id/friends',
      templateUrl: 'views/company/company_friends.html',
      controller: "CompanyCtrl"
    })

    .state('resume', {
      url: '/company/:user_id/resume',
      templateUrl: 'views/company/company_resume.html',
      controller: "CompanyCtrl"
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
      controller: "CompanyCtrl"
    });

  });