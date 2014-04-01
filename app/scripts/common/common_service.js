'use strict';
angular.module('QuickCast').factory('register', function($http) {
	var register_instance = function (user_reg){
var data1="test";
		 $http({method: 'post', url: 'http://114.215.168.150:8080/quickcast/user_reg.do?method=reg',data:data1}).
      success(function(data, status) {
alert("success");
      }).
      error(function(data, status) {
alert("failed");
    });
	}
	//工厂函数的函数体创建了NewServiceInstance
	return register_instance;
});