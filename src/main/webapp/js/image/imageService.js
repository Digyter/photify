angular
    .module('photify')
    .service('imageService', ['$http',imageService]);

function imageService(http) {
	var restServerUrl = 'http://1-dot-photifydev.appspot.com';
	var staticUserKey = 'agxzfnBob3RpZnlkZXZyDQsSBFVzZXIYoa71AQw';

	this.addImage = function(userKey, albumKey, imageName, imageUrl){
		userKey = staticUserKey; //remove once user is implemented
		console.log("userKey: " + userKey + " albumKey: " + albumKey + " imageName: " + imageName + " imageUrl: " + imageUrl);	
		http.post(restServerUrl + '/image/add', {album_key:albumKey,user_key:userKey, image_name:name, image_url:url}).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
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