'use strict';
angular.module('QuickCastSearch')
	.factory('SearchService', function($http) {
		var Server = 'http://www.playingcn.com:8080/quickcast/';
		var SearchService = {
			Recruit: function() {
				var recruit_response = $http({
						method: 'get',
						url: Server + 'search.do?method=search_queryRecruit'
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return recruit_response;
			},
			Hunter: function() {
				var hunter_response = $http({
						method: 'get',
						url: Server + 'search.do?method=search_queryHunter'
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return hunter_response;
			},
			Etp: function() {
				var etp_response = $http({
						method: 'get',
						url: Server + 'search.do?method=search_queryEtp'
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return etp_response;
			},
			Seeker: function() {
				var seeker_response = $http({
						method: 'get',
						url: Server + 'search.do?method=search_querySeeker'
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return seeker_response;
			},
			SingleRecruit: function(info_id) {
				var singlerecruit_response = $http({
						method: 'post',
						url: Server + 'recruitinfo.do?method=recruitinfo_queryByInfoId',
						data: info_id
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return singlerecruit_response;
			},

			SingleUser: function(user_id) {
				var singleuser_response = $http({
						method: 'post',
						url: Server + 'info.do?method=info_queryByUserId',
						data: user_id
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return singleuser_response;
			},
			WorkExpGet: function(user_id) {
				var workexp_get_data = {
					'user_id': user_id
				};
				var workexp_get_response = $http({
						method: 'post',
						url: Server + 'exp.do?method=queryByWorkuserId',
						data: workexp_get_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return workexp_get_response;
			},
			EduExpGet: function(user_id) {
				var eduexp_get_data = {
					'user_id': user_id
				};
				var eduexp_get_response = $http({
						method: 'post',
						url: Server + 'exp.do?method=queryByEduuserId',
						data: eduexp_get_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return eduexp_get_response;
			},
			PrjExpGet: function(user_id) {
				var prjexp_get_data = {
					'user_id': user_id
				};
				var prjexp_get_response = $http({
						method: 'post',
						url: Server + 'exp.do?method=queryByPrjuserId',
						data: prjexp_get_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return prjexp_get_response;
			},
			ResumeGet: function(user_id) {
				var resume_get_data = {
					'user_id': user_id
				};
				var resume_get_response = $http({
						method: 'post',
						url: Server + 'personal_rsm.do?method=imp_resume_queryByUserId',
						data: resume_get_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return resume_get_response;
			},
			HunterRsm: function(hunter_id) {
				var hunterrsm_response = $http({
						method: 'post',
						url: Server + 'rsm_deliver.do?method=imp_deliver_queryByHunterId',
						data: hunter_id
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return hunterrsm_response;
			},
			DeliverRsm: function(deliver) {
				var deliverrsm_response = $http({
						method: 'post',
						url: Server + 'rsm_deliver.do?method=imp_deliver_insert',
						data: deliver
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return deliverrsm_response;
			},
			Recommend: function(user_id) {
				var recommend_response = $http({
						method: 'post',
						url: Server + 'recruitinfo.do?method=recruitinfo_recommend',
						data: user_id
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return recommend_response;
			},
			Friendcircle: function(user_id) {
				//Friendcircle服务
				var friend_circle_data = {
					'self_id': user_id
				};
				var friendcircle_response = $http({
						method: 'post',
						url: Server + 'friend_list.do?method=display_friendsarray',
						data: friend_circle_data
					})
					.then(function(response) {
						var response_JSON = decodeURIComponent(decodeURIComponent(response.data));
						response_JSON = JSON.parse(response_JSON.replace(/\+/g, ' '));
						return response_JSON;
					});
				return friendcircle_response;
				//Friendcircle服务返回数据
			}
		};
		return SearchService;
	});