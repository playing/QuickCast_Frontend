'use strict';

angular.module('QuickCastUser')
	.controller('UserCtrl', function($scope, $location, $stateParams, $state, $window, $cookieStore, UserService) {
		$scope.active1 = 'active';
		$scope.alerts = [];
		$scope.user = {};
		$scope.user_profile = {};
		$scope.messages = [];
		$scope.seekerfriends = [];
		$scope.headhunterfriends = [];
		$scope.companyfriends = [];
		$scope.sendmessages = [];
		$scope.notices = [];
		$scope.applys = [];
		$scope.recommends = [];
		$scope.friendcircles = [];
		$scope.updates = [];
		$scope.newmessage_data = {};
		$scope.searchicon = 'list';
		$scope.$parent.messageswitch = {};
		$scope.newsbutton = '所有动态';
		$scope.searchbtn = '邮箱地址';
		$scope.newsquantity = 10;
		$scope.search_key = {};
		$scope.search_key.search_type = 'email';
		$scope.searchfriend_lists = [];
		$scope.langs = [];
		$scope.projects = [];
		$scope.edus = [];
		$scope.works = [];
		$scope.proficiencys = ['初级(入门)', '中级(日常会话)', '中高级(商务会话)', '高级(无障碍商务沟通)', '母语'];
		$scope.delivers = [];

		var location_array = $location.path().split('/');

		var check_login = function() {
			var check = $cookieStore.get('_UDATA');
			if (check === undefined) {
				$window.location.href = 'http://127.0.0.1:9000/';
				//cookie校验
			} else {
				$scope.user_id = location_array[2];
				$scope.cn_tname = $cookieStore.get('_UDATA').cn_tname;
				if (check.user_id === $scope.user_id) {} else {
					$window.location.href = 'http://127.0.0.1:9000/';
				}

			}
		};
		var init = function() {
			UserService.Receivenews(parseInt($scope.user_id)).then(function(response) {
				$scope.updates = response.news;
				UserService.Friendnews(parseInt($scope.user_id)).then(function(response) {
					var myself_updates = response.news;
					$scope.updates = $scope.updates.concat(myself_updates);
				});
			});

			UserService.UserReg($cookieStore.get('_UDATA')).then(function(response) {
				$scope.user = response.user[0];
			});

			UserService.UserProfile(parseInt($scope.user_id)).then(function(response) {
				$scope.user_profile = response.seeker_info[0];
			});

			UserService.messageReceive($scope.user_id).then(function(response) {
				var messageReceive = response.message;
				for (var i = 0; i <= messageReceive.length - 1; i++) {
					if (messageReceive[i].message_type === '1') {
						$scope.messages.push(messageReceive[i]);

					} else {
						$scope.notices.push(messageReceive[i]);
					}
				}
			});

			UserService.ApplysList(parseInt($scope.user_id)).then(function(response) {
				var applylist = response.friend_list;
				for (var i = 0; i < applylist.length; i++) {
					if (applylist[i].friend_status === '1') {
						$scope.applys.push({
							rlts_id: applylist[i].rlts_id,
							name: applylist[i].partner_name,
							id: applylist[i].partner_id,
							group: applylist[i].user_type,
							reason: applylist[i].reason,
						});
					}
				}
			});

			UserService.FriendsList($scope.user_id).then(function(response) {
				$scope.friendlists = response.friend_list;
				for (var i = 0; i <= $scope.friendlists.length - 1; i++) {
					if ($scope.friendlists[i].friend_status === '1') {
						$scope.friendlists.splice(i, 1);
					} else {
						if ($scope.friendlists[i].friendsgroup === '1') {
							$scope.seekerfriends.push($scope.friendlists[i]);
						} else {
							if ($scope.friendlists[i].friendsgroup === '2') {
								$scope.headhunterfriends.push($scope.friendlists[i]);
							} else {
								$scope.companyfriends.push($scope.friendlists[i]);
							}
						}
					}
				}
			});

			UserService.messageSend($scope.user_id).then(function(response) {
				$scope.sendmessages = response.message;
			});

			UserService.Friendcircle(parseInt($scope.user_id)).then(function(response) {
				$scope.friendcircles = response.partner;
			});
			UserService.Recommend(parseInt($scope.user_id)).then(function(response) {
				$scope.recommends = response.recruit_info;
			});
			UserService.WorkExpGet(parseInt($scope.user_id)).then(function(response) {
				$scope.works = response.work_exp;
			});
			UserService.PrjExpGet(parseInt($scope.user_id)).then(function(response) {
				$scope.projects = response.prj_exp;
			});

			UserService.EduExpGet(parseInt($scope.user_id)).then(function(response) {
				$scope.edus = response.edu_exp;
			});

			UserService.ResumeGet(parseInt($scope.user_id)).then(function(response) {
				$scope.langs = JSON.parse(response.resume[0].language_skill);
			});
			UserService.DeliverRsm(parseInt($scope.user_id)).then(function(response) {
				$scope.delivers = response.deliver;
				for (var i = 0; i < $scope.delivers.length; i++) {
					if ($scope.delivers[i].handle_status === '0') {
						$scope.delivers[i].progress = 30;
					} else {
						if ($scope.delivers[i].handle_status === '1') {
							$scope.delivers[i].progress = 60;
						} else {
							$scope.delivers[i].progress = 100;
						}
					}
				};
			});
		};
		//初始化
		check_login();
		init();
		$scope.image_url = 'http://192.168.191.1:8080/quickcast/upload/' + $scope.user_id + '.jpg';

		$scope.logout = function() {
			$cookieStore.remove('_UDATA');
			$window.location.href = 'http://127.0.0.1:9000/';
		};

		$scope.publishnews = function(publish) {
			var timestamp = new Date();
			publish.pub_id = $scope.user_id;
			publish.pub_time = timestamp.getTime();
			publish.pub_type = '1';
			UserService.Publishnews(publish).then(function(response) {
				if (response.result.data === 'success') {
					UserService.Receivenews(parseInt($scope.user_id)).then(function(response) {
						$scope.updates = response.news;
						UserService.Friendnews(parseInt($scope.user_id)).then(function(response) {
							var myself_updates = response.news;
							$scope.updates = $scope.updates.concat(myself_updates);
						});
					});

				} else {
					$scope.alerts.push({
						type: 'danger',
						msg: '发送失败,请尝试重新发送.'
					});
				}
			});
		};
		$scope.morenews = function() {
			$scope.newsquantity = $scope.newsquantity + 5;
		};

		$scope.newmessage = function(newmessage_data) {
			var timestamp = new Date();
			newmessage_data.dispatch_time = timestamp.getTime();
			newmessage_data.dispatch_id = parseInt($scope.user_id);
			newmessage_data.receive_info = undefined;
			UserService.Newmessage(newmessage_data).then(function(response) {
				if (response.result.data === 'success') {
					$scope.updates.push(newmessage_data);
					$scope.$parent.messageswitch = {
						messageTab: 'send'
					};
					$scope.alerts.push({
						type: 'success',
						msg: '发送成功.'
					});
					UserService.messageSend($scope.user_id).then(function(response) {
						$scope.sendmessages = response.message;
					});

				} else {
					$scope.alerts.push({
						type: 'danger',
						msg: '发送失败,请尝试重新发送.'
					});
				}
			});
		};

		$scope.delmessage = function(index, method) {
			var del_message_index = '';
			if (method === 'receive') {
				del_message_index = $scope.messages[index].msg_id;
				UserService.Delmessage(del_message_index).then(function(response) {
					if (response.result.data === 'success') {
						$scope.messages.splice(index, 1);
						$scope.alerts.push({
							type: 'success',
							msg: '删除成功.'
						});
					} else {
						$scope.alerts.push({
							type: 'danger',
							msg: '删除失败.'
						});
					}
				});

			} else {
				del_message_index = $scope.sendmessages[index].msg_id;
				UserService.Delmessage(del_message_index).then(function(response) {
					response = response;
					if (response.result.data === 'success') {
						$scope.sendmessages.splice(index, 1);
						$scope.alerts.push({
							type: 'success',
							msg: '删除成功.'
						});
					} else {
						$scope.alerts.push({
							type: 'danger',
							msg: '删除失败.'
						});
					}
				});
			}
			//删除站内信
		};

		$scope.replay = function(index, method) {
			var replay_message_id = 0;
			var replay_message_name = '';
			if (method === 'receive') {
				replay_message_id = $scope.messages[index].dispatch_id;
				replay_message_name = $scope.messages[index].dispatch_name;
			} else {
				replay_message_id = $scope.sendmessages[index].receive_id;
				replay_message_name = $scope.sendmessages[index].receive_name;
			}
			$scope.newmessage_data.receive_id = replay_message_id;
			$scope.newmessage_data.receive_info = replay_message_name;
			$scope.$parent.messageswitch = {
				messageTab: 'write'
			};
			$scope.active1 = '';
			$scope.active2 = '';
			//回复站内信信息
		};
		$scope.friendtomessage = function(index, method) {
			var friend_message_info = 0;
			var friend_message_name = '';
			if (method === 'seeker') {
				friend_message_info = $scope.seekerfriends[index].partner_id;
				friend_message_name = $scope.seekerfriends[index].partner_name;
			} else {
				if (method === 'headhunter') {
					friend_message_info = $scope.headhunterfriends[index].partner_id;
					friend_message_name = $scope.headhunterfriends[index].partner_name;
				} else {
					friend_message_info = $scope.companyfriends[index].partner_id;
					friend_message_name = $scope.companyfriends[index].partner_name;
				}
			}
			$location.path('user/' + $scope.user_id + '/message');
			$scope.newmessage_data.receive_id = friend_message_info;
			$scope.newmessage_data.receive_info = friend_message_name;
			$scope.$parent.messageswitch = {
				messageTab: 'write'
			};
		};
		$scope.delfriend = function(index, method) {
			var del_friend_id = '';
			if (method === 'seeker') {
				del_friend_id = $scope.seekerfriends[index].partner_id;
			} else {
				if (method === 'headhunter') {
					del_friend_id = $scope.headhunterfriends[index].partner_id;
				} else {
					del_friend_id = $scope.companyfriends[index].partner_id;
				}
			}
			UserService.DelFriends(parseInt($scope.user_id), del_friend_id).then(function(response) {
				if (response.result.data === 'success') {
					$scope.alerts.push({
						type: 'success',
						msg: '删除成功'
					});
				} else {
					$scope.alerts.push({
						type: 'danger',
						msg: '删除失败'
					});

				}

			});

		};
		$scope.friendpage = function(index, method) {
			var firend_page_id = '';
			if (method === 'seeker') {
				firend_page_id = $scope.seekerfriends[index].partner_id;
				$window.open('http://127.0.0.1:9000/user.html#/user/' + firend_page_id);
			} else {
				if (method === 'headhunter') {
					firend_page_id = $scope.headhunterfriends[index].partner_id;
					$window.open('http://127.0.0.1:9000/headhunter.html#/user/' + firend_page_id);
				} else {
					firend_page_id = $scope.companyfriends[index].partner_id;
					$window.open('http://127.0.0.1:9000/company.html#/user/' + firend_page_id);
				}
			}

		};

		$scope.friend_add = function(index, method) {
			var friend_status = '';
			if (method === 'agree') {
				friend_status = '2';
			} else {
				friend_status = '1';
			}
			UserService.ApplyConfirm(parseInt($scope.user_id), $scope.applys[index].id, friend_status, $scope.applys[index].rlts_id).then(function(response) {
				if (response.result.data === 'success') {
					$scope.alerts.push({
						type: 'success',
						msg: '操作成功.'
					});
					$scope.applys.splice(index, 1);
				} else {
					$scope.alerts.push({
						type: 'danger',
						msg: '操作失败.'
					});
				}
			});

		};

		$scope.findfriend = function(search_key) {
			UserService.SearchFriends(search_key).then(function(response) {
				if (response.hasOwnProperty('result')) {
					$scope.alerts.push({
						type: 'danger',
						msg: '搜索失败,未能找到相应的用户.'
					});
				} else {
					$scope.searchfriend_lists = response.query;
				}
			});

		};

		$scope.searchapply = function(index, friend_insert) {
			friend_insert.self_id = parseInt($scope.user_id);
			friend_insert.partner_id = $scope.searchfriend_lists[index].partner_id;
			UserService.AddFriends(friend_insert).then(function(response) {

				if (response.result.data === 'success') {
					$scope.alerts.push({
						type: 'success',
						msg: '发送成功,请等待对方确认.'
					});

				} else {
					$scope.alerts.push({
						type: 'danger',
						msg: '发送失败,请尝试重新发送.'
					});


				}

			});
		};

		$scope.circleapply = function(index) {
			// body...
		};

		$scope.delalert = function(index) {
			$scope.alerts.splice(index, 1);
			//手动删除错误信息
		};

		//简历编辑
		$scope.dellangs = function(index) {
			$scope.langs.splice(index, 1);

		};
		$scope.savelangs = function() {
			// TODO
		};
		$scope.addlangs = function() {
			$scope.langs.push({
				lang: '',
				proficiency: '',
				user_id: parseInt($scope.user_id)
			});
		};

		$scope.delprojects = function(index) {
			$scope.projects.splice(index, 1);

		};
		$scope.saveprojects = function(newproject) {
			$scope.projects.push({
				prj_name: newproject.prj_name,
				prj_duty: newproject.prj_duty,
				start_time: newproject.start_time,
				end_time: newproject.end_time,
				prj_desc: newproject.prj_desc,
				prj_achievement: newproject.prj_achievement,
				user_id: parseInt($scope.user_id)
			});
		};

		$scope.deledus = function(index) {
			$scope.edus.splice(index, 1);

		};
		$scope.saveedus = function(newedu) {
			$scope.edus.push({
				school_name: newedu.school_name,
				edu_bg: newedu.edu_bg,
				study_start_time: newedu.study_start_time,
				study_end_time: newedu.study_end_time,
				edu_desc: newedu.edu_desc,
				major: newedu.major,
				user_id: parseInt($scope.user_id)
			});
		};
		$scope.delworks = function(index) {
			$scope.works.splice(index, 1);

		};
		$scope.saveworks = function(newwork) {
			$scope.works.push({
				etp_name: newwork.etp_name,
				work_duty: newwork.work_duty,
				start_time: newwork.start_time,
				end_time: newwork.end_time,
				profession: newwork.profession,
				work_place: newwork.work_place,
				user_id: parseInt($scope.user_id)
			});
		};

		$scope.editsave = function() {
			var language_skill = JSON.stringify($scope.langs);
			var resume_update = {
				user_id: parseInt($scope.user_id),
				language_skill: language_skill
			};

			UserService.WorkExpUpdate($scope.works).then(function() {

			});
			UserService.PrjExpUpdate($scope.projects).then(function() {

			});

			UserService.EduExpUpdate($scope.edus).then(function() {

			});

			UserService.ResumeUpdate(resume_update).then(function() {

			});
		};

		$scope.$on('$stateChangeStart',
			function() {
				$scope.alerts = [];
				//视图切换时清空错误信息
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
	});