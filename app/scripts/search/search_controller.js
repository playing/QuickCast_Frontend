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
		$scope.langs = [];
		$scope.projects = [];
		$scope.edus = [];
		$scope.works = [];
		$scope.user_cookie = $cookieStore.get('_UDATA');
		$scope.resumes = [];
		$scope.alerts = [];
		$scope.recommends = [];
		$scope.friendcircles = [];

		var init = function() {
			SearchService.Etp().then(function(response) {
				$scope.etps = response.etp;
			});
			SearchService.Recruit().then(function(response) {
				$scope.recruits = response.recruit_info;
			});

			SearchService.Hunter().then(function(response) {
				$scope.hunters = response.hunter;
			});
			SearchService.Seeker().then(function(response) {
				$scope.seekers = response.seeker;
			});
			SearchService.Friendcircle(parseInt($scope.user_cookie.user_id)).then(function(response) {
				$scope.friendcircles = response.partner;
			});
			SearchService.Recommend(parseInt($scope.user_cookie.user_id)).then(function(response) {
				$scope.recommends = response.recruit_info;
			});
		};
		var check_search = function() {
			var search_word = $location.hash();
			var search_type = $location.path().split('/')[2];
			if (search_type === 'job') {
				$scope.recruit_search = {
					$: search_word
				};
			} else {
				if (search_type === 'member') {
					$scope.searchTab = 'member';
					$scope.active2 = 'active';
					$scope.active1 = '';
					$scope.userradio = '1';
					$scope.seeker_search = {
						$: search_word
					};
				}
			}
		};
		//初始化
		init();
		check_search();

		$scope.moresearch = function() {
			$scope.searchnum = $scope.searchnum + 5;
		};

		$scope.back = function() {
			if ($scope.user_cookie.user_type === '1') {
				$window.location.href = 'user.html#/user/' + $scope.user_cookie.user_id;
			} else {
				if ($scope.user_cookie.user_type === '2') {
					$window.location.href = 'headhunter.html#/user/' + $scope.user_cookie.user_id;
				} else {
					$window.location.href = 'company.html#/user/' + $scope.user_cookie.user_id;
				}
			}
		};

		$scope.deliver = function(target_id, target_type, info_id) {
			var resume_checked_flag = 0;
			for (var i = 0; i < $scope.resumes.length; i++) {
				if ($scope.resumes[i].$checked) {
					var deliver_rsm = {};
					resume_checked_flag = 1;
					if (target_type === '2') {
						deliver_rsm = {
							rsm_id: $scope.resumes[i].rsm_id,
							hunter_id: target_id,
							etp_id: 0,
							info_id: info_id
						};
					} else {
						deliver_rsm = {
							rsm_id: $scope.resumes[i].rsm_id,
							hunter_id: 0,
							etp_id: target_id,
							info_id: info_id
						};
					}
					SearchService.DeliverRsm(deliver_rsm).then(function(response) {
						if (response.result.data === 'success') {
							$scope.alerts.push({
								type: 'success',
								msg: '投递成功.'
							});
						} else {
							$scope.alerts.push({
								type: 'danger',
								msg: '请求失败,请尝试重新发送.'
							});
						}
					});
				}
			}
			if (resume_checked_flag === 0) {
				$scope.alerts.push({
					type: 'danger',
					msg: '请选择至少一份简历.'
				});

			}
		};

		$scope.tship = function(hunter_id) {
			var tship_rsm = {
				rsm_id: parseInt($scope.user_cookie.user_id),
				hunter_id: hunter_id,
				etp_id: 0,
				info_id: 0
			};
			SearchService.DeliverRsm(tship_rsm).then(function(response) {
				if (response.result.data === 'success') {
					$scope.alerts.push({
						type: 'success',
						msg: '托管成功.'
					});
				} else {
					$scope.alerts.push({
						type: 'danger',
						msg: '请求失败,请尝试重新发送.'
					});
				}
			});
		};

		$scope.$on('$stateChangeStart',
			function() {
				$scope.alerts = [];
				//视图切换时清空错误信息
			});

		$scope.$on('$stateChangeStart',
			function() {
				var location_array = $location.path().split('/');
				$scope.index_id = location_array[2];
				if (location_array[1] === 'job') {
					var info_id = {
						info_id: parseInt($scope.index_id)
					};
					SearchService.SingleRecruit(info_id).then(function(response) {
						$scope.singlerecruit = response.recruit_info[0];
					});
					if ($scope.user_cookie.user_type === '1') {
						$scope.resumes = [{
							rsm_id: $scope.user_cookie.user_id,
							name: $scope.user_cookie.cn_tname
						}];
					} else {
						SearchService.HunterRsm(parseInt($scope.user_cookie.user_id)).then(function(response) {
							for (var i = 0; i < response.deliver.length; i++) {
								$scope.resumes = [];
								$scope.resumes.push({
									rsm_id: response.deliver[i].rsm_id,
									name: response.deliver[i].rsm_name
								});
							}
						});
					}
				} else {
					if (location_array[1] === 'member') {
						SearchService.SingleUser(parseInt($scope.index_id)).then(function(response) {
							$scope.singleuser = response.user_info[0];
							console.log(response);
						});
						SearchService.WorkExpGet(parseInt($scope.index_id)).then(function(response) {
							$scope.works = response.work_exp;
						});
						SearchService.PrjExpGet(parseInt($scope.index_id)).then(function(response) {
							$scope.projects = response.prj_exp;
						});

						SearchService.EduExpGet(parseInt($scope.index_id)).then(function(response) {
							$scope.edus = response.edu_exp;
						});

						SearchService.ResumeGet(parseInt($scope.index_id)).then(function(response) {
							$scope.langs = JSON.parse(response.resume[0].language_skill);
						});

					}
				}
				//视图切换时更新路径
			});
	})
	.filter('usertype', function() {
		return function(input) {
			var out = '';
			if (input === '1') {
				out = '求职者';
			} else {
				if (input === '2') {
					out = '猎头';
					return out;
				} else {
					out = '公司';
					return out;
				}
				out = '未确定';
			}
			return out;
		};
	})
	.filter('usertypeeng', function() {
		return function(input) {
			var out = '';
			if (input === '1') {
				out = 'user';
			} else {
				if (input === '2') {
					out = 'headhunter';
					return out;
				} else {
					out = 'company';
					return out;
				}
				out = '未确定';
			}
			return out;
		};
	});