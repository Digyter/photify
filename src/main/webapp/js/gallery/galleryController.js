angular
	.module('photify')
	.controller('galleryController',['$scope', '$rootScope', '$modal', 'albumService', 'imageService', 'userService', galleryController]);

function galleryController(scope,rootScope,modal, albumService, imageService, userService){
	scope.albumList = [];
	scope.imageList = [];
	scope.currentImageUrl = '';
	scope.currentAlbum = '';
	scope.isLoggedIn = false;
	
	scope.switchAlbum = function(album){
		scope.currentAlbum = album.key;
		
		//retrieve images
		imageService.listImages(album.key).then(function(response){
			scope.imageList = response.data;
		});
	}
	
	scope.setPreviewImageUrl = function(image){
		scope.currentImageUrl = image.url;
	}
	
	scope.listAlbums = function(){
		//retrieve albums
		albumService.listAlbums(rootScope.userKey).then(function(response){
			scope.albumList = response.data;
		});
	}	
	
	//Modals
	scope.openCreateAlbumModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/album/create_album.jsp',
			controller: 'albumModalController'
		});
	}
	
	scope.openDeleteAlbumModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/album/delete_album.jsp',
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
	
	scope.openShareAlbumModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/album/share_album.jsp',
			controller: 'albumModalController'
		});
	}
	
	scope.openCreateAlbumModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/album/create_album.jsp',
			controller: 'albumModalController'
		});
	}
	
	scope.openDeleteAlbumModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/album/delete_album.jsp',
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
	
	scope.openShareAlbumModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/album/share_album.jsp',
			controller: 'albumModalController'
		});
	}
	
	//get user details
	userService.getUserDetails().then(function(response){		
		if(response.data.isUserLoggedIn){	
			scope.isLoggedIn = true;			
			rootScope.userKey = response.data.id;
			rootScope.userEmail = response.data.email;
			rootScope.logoutURL = response.data.logoutURL;
		}
	});	
	
	//test
	scope.listAlbums();
}