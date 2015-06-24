angular
    .module('photify')
    .service('imageService', ['$http',imageService]);

function imageService(http) {
	var restServerUrl = 'http://1-dot-photifydev.appspot.com';
	var staticUserKey = 'agxzfnBob3RpZnlkZXZyDAsSBFVzZXIY4_N7DA';

	this.addImage = function(userKey, albumKey, imageName, imageUrl){
		userKey = staticUserKey; //remove once user is implemented
		console.log("userKey: " + userKey + " albumKey: " + albumKey + " imageName: " + imageName + " imageUrl: " + imageUrl);	
		http.post(restServerUrl + '/image/add', {album_key:albumKey,user_key:userKey, image_name:imageName, image_url:imageUrl}).
		  success(function(data, status, headers, config) {
		    console.log(data);
		  }).
		  error(function(data, status, headers, config) {
		    console.log(data);
		  });
	}
	
	this.listImages = function(userKey,albumKey){
		userKey = staticUserKey; //remove once user is implemented
		return http.get(restServerUrl + '/image/get_image_by_album/' + userKey + '/' + albumKey).
		  success(function(data, status, headers, config) {
			  return data;
		  }).
		  error(function(data, status, headers, config) {
			  return "error";
		  });
	}
}