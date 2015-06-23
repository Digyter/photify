angular
    .module('photify')
    .service('userService', ['$http',userService]);

function userService(http) {	
	this.getUserDetails = function(){	
		return http.get('/login').
		  success(function(data, status, headers, config) {				  
			  if(!data.isUserLoggedIn){	
				  window.location.href = data.loginURL;
			  }			  
			  return data;
		  }).
		  error(function(data, status, headers, config) {
			  return "error";
		  });
	}
}