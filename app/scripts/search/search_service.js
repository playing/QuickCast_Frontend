'use strict';
angular.module('QuickCastSearch')
	.factory('SearchService', function($http) {
		var Server = 'http://192.168.191.1:8080/quickcast/';
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
				return recruit_response
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
				return hunter_response
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
				return etp_response
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
				return seeker_response
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
				return singlerecruit_response
			},
		};
		return SearchService;
	});