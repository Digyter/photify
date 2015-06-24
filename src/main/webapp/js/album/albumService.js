angular
    .module('photify')
    .service('albumService', ['$http',albumService]);

function albumService(http) {
	var restServerUrl = 'http://1-dot-photifydev.appspot.com';
	var staticUserKey = 'agxzfnBob3RpZnlkZXZyDAsSBFVzZXIY4_N7DA';
		
	this.createAlbum = function(userKey, albumName){
		userKey = staticUserKey; //remove this once user is implemented
		http.post(restServerUrl + '/album/add', {album_name:albumName,user_key:userKey}).
		  success(function(data, status, headers, config) {
		    console.log(data);
		  }).
		  error(function(data, status, headers, config) {
			  console.log(data);
		  });
	}
	
	this.deleteAlbum = function(userKey, albumKey){
		userKey = staticUserKey; //remove this once user is implemented
		console.log("userKey: " + userKey + " albumKey: " + albumKey);
		http.post(restServerUrl + '/album/delete', {album_key:albumKey,user_key:userKey}).
		  success(function(data, status, headers, config) {
		    console.log(data);
		  }).
		  error(function(data, status, headers, config) {
		    console.log(data);
		  });
	}
	
	this.listAlbums = function(userKey){
		return http.get(restServerUrl + '/album/get_album/' + userKey + '/1').
		  success(function(data, status, headers, config) {
			  return data;
		  }).
		  error(function(data, status, headers, config) {
			  return "error";
		  });
	}
	
	this.listUsers = function(){
		return http.get('/userList').
		  success(function(data, status, headers, config) {
			  return data;
		  }).
		  error(function(data, status, headers, config) {
			  return "error";
		  });
	}
}