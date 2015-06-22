angular
	.module('photify')
	.controller('galleryController',['$scope', '$rootScope', '$modal', 'albumService', 'imageService', 'userService', galleryController]);

function galleryController(scope,rootScope,modal, albumService, imageService, userService){
	scope.albumList = [];
	scope.isLoggedIn = false;
	
	//get user details
	userService.getUserDetails().then(function(response){		
		if(response.data){			
			userDetails = response.data;
			if(userDetails.signinUrl){
				scope.isLoggedIn = false;
				window.location.href = userDetails.signinUrl;	
			}else{
				scope.isLoggedIn = true;
				//retrieve albums
				albumService.listAlbums(userDetails.id).then(function(response){
					scope.albumList = response.data;
				});
			}		
		}
	});	
		
	scope.openCreateAlbumModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/album/create_album.jsp',
			controller: 'albumModalController'
		});
	}
	
	scope.openAddImageModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/image/add_image.jsp',
			controller: 'imageModalController',
			resolve:{
				albumList: function(){
					return scope.albumList;
				}
			}
		});
	}
}