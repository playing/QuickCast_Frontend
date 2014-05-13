'use strict';

angular.module('QuickCastSearch')
	.controller('SearchCtrl', function($scope, $location, $stateParams, $state, $window, $cookieStore, SearchService) {
		$scope.recruits = [];
		$scope.etps = [];
		$scope.hunters = [];
		$scope.seekers = [];
		$scope.searchicon = 'list';
		$scope.active1 = 'active';
		$scope.searchnum = 10;
		var init = function() {
			SearchService.Etp().then(function(response) {
				$scope.etps = response.etp;

			});
			SearchService.Recruit().then(function(response) {
				$scope.recruits = response.recruit_info;
				console.log(response);
			});

			SearchService.Hunter().then(function(response) {
				$scope.hunters = response.hunter;
			});
			SearchService.Seeker().then(function(response) {
				$scope.seekers = response.seeker;
			});
		};
		//初始化
		init();

		$scope.moresearch = function() {
			$scope.searchnum = $scope.searchnum + 5;
		};
	});