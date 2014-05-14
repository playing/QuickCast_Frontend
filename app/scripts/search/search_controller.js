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

		$scope.back = function() {
			var user_cookie = $cookieStore.get('_UDATA');
			if (user_cookie.user_type === '1') {
				$window.location.href = 'user.html#/user/' + user_cookie.user_id;

			} else {
				if (user_type === '2') {
					$window.location.href = 'headhunter.html#/user/' + user_cookie.user_id;
				} else {
					$window.location.href = 'company.html#/user/' + user_cookie.user_id;
				}
			}
		};

		$scope.$on('$stateChangeStart',
			function() {
				var location_array = $location.path().split('/');
				$scope.index_id = location_array[2];
				if (location_array[1] === 'job') {
					console.log(location_array[1]);
					var info_id = {
						info_id: parseInt($scope.index_id)
					};
					SearchService.SingleRecruit(info_id).then(function(response) {
						$scope.singlerecruit=response.recruit_info[0];
					});
					
				} else {
					if (location_array[1] === 'member') {
						console.log('member');

					}
				}
				//视图切换时更新路径
			});
	});