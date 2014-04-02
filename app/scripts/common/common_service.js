'use strict';
angular.module('QuickCast').factory('register', function($http,$stateParams, $state) {
	var register_instance = function (user_reg){
var data1="test";
		 $http({method: 'get', url: 'user_reg.do?method=reg',data:data1}).
      success(function(data, status) {
alert("success");
			//$state.go('basicprofile');
      }).
      error(function(data, status) {
alert("failed");
			$state.go('profile');
    });
	}
	//工厂函数的函数体创建了NewServiceInstance
	return register_instance;
});