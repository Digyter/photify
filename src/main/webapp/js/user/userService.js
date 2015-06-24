angular
    .module('photify')
    .service('userService', ['$http', '$q',userService]);

function userService(http, q) {	
	var restServerUrl = 'http://1-dot-photifydev.appspot.com';
	
	this.getUserKey = function(userName, email){		
		return http.post(restServerUrl + '/user/add', {name:userName,email:email}).
		  success(function(data, status, headers, config) {
			  console.log("user key");
		    return data;
		  }).
		  error(function(data, status, headers, config) {
			  return "error";
		  });		
	}
	
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
	var getUserKeyFunction = this.getUserKey;
	var getUserDetailsFunction = this.getUserDetails;
	var userData = {}; 	
	var tasks = q.defer();
	
	this.getCurrentUser = function (){			
		tasks = getUserDetailsFunction()
				.then(function (response){
					return getUserKeyFunction(response.data.name, response.data.email)
					.then(function (response2){
						response.data.userKey = response2.data[0].key;
						userData = response;
						return response;
				});
		});
		return tasks;
	};
		
}
