'use strict';

angular.module('QuickCastAdmin')
	.controller('AdminCtrl', function($scope, $location, $stateParams, $state, $window, $cookieStore, AdminService) {
		$scope.overview = [];
		$scope.users = [];
		$scope.newmessage_data = {};
		var init = function() {
			AdminService.Overview().then(function(response) {
				$scope.overview = response.count[0];
			});
			AdminService.UserAll().then(function(response) {
				$scope.users = response.count;
				vm.items = $scope.users;
			});
		};
		init();

		$scope.newmessage = function(newmessage_data) {
			var timestamp = new Date();
			newmessage_data.dispatch_time = timestamp.getTime();
			var newmessage_data_temp = [];

			for (var i = 0; i < vm.selection().length; i++) {
				newmessage_data_temp.push({
					dispatch_time: newmessage_data.dispatch_time,
					dispatch_id: 0,
					receive_id: vm.selection()[i].user_id,
					title: newmessage_data.title,
					content: newmessage_data.content
				});
			};
			for (var i = 0; i < vm.selection().length; i++) {
				AdminService.Newmessage(newmessage_data_temp[i]).then(function(response) {
				});
			};
		};

		var vm = $scope.vm = {};
		vm.page = {
			size: 5,
			index: 1
		};

		vm.sort = {
			column: 'user_id',
			direction: 1,
			toggle: function(column) {
				if (column.sortable === false)
					return;

				if (this.column === column.name) {
					this.direction = -this.direction || -1;
				} else {
					this.column = column.name;
					this.direction = -1;
				}
			}
		};
		vm.checkAll = function(checked) {
			angular.forEach(vm.items, function(item) {
				item.$checked = checked;
			});
		};
		vm.selection = function() {
			var selction_items = [];
			angular.forEach(vm.items, function(item) {
				if (item.$checked === true) {
					selction_items.push(item);
				};
			});
			return selction_items;
		};
		// 构建模拟数据
		vm.columns = [{
			label: 'ID',
			name: 'user_id',
			type: 'string'
		}, {
			label: '姓名',
			name: 'cn_tname',
			type: 'string'
		}, {
			label: 'email',
			name: 'email',
			type: 'string'
		}, {
			label: '用户类型',
			name: 'user_type',
			type: 'string'
		}];
	})
	.filter('paging', function() {
		return function(items, index, pageSize) {
			if (!items)
				return [];

			var offset = (index - 1) * pageSize;
			return items.slice(offset, offset + pageSize);
		}
	})
	.filter('size', function() {
		return function(items) {
			if (!items)
				return 0;

			return items.length || 0
		}
	})
	.filter('orderClass', function() {
		return function(direction) {
			if (direction === -1)
				return "glyphicon-chevron-down";
			else
				return "glyphicon-chevron-up";
		}
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
	.config(function(paginationConfig, pagerConfig) {
		paginationConfig.firstText = "首页";
		paginationConfig.previousText = '上页';
		paginationConfig.nextText = '下页';
		paginationConfig.lastText = '尾页';

		pagerConfig.previousText = "« 上页";
		pagerConfig.nextText = "下页 »";
	});