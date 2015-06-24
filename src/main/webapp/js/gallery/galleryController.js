angular.module('photify').controller(
		'galleryController',
		[ '$scope', '$rootScope', '$modal', 'albumService', 'imageService',
				'userService', galleryController ]);

function galleryController(scope, rootScope, modal, albumService, imageService,
		userService) {
	scope.albumList = [];
	scope.imageList = [];
	scope.currentImageUrl = '';
	scope.currentAlbum = '';
	scope.isLoggedIn = false;

	scope.switchAlbum = function(album) {
		scope.currentAlbum = album;

		// retrieve images
		imageService.listImages(rootScope.userKey,album.key).then(function(response) {
			scope.imageList = response.data;
		});
	}

	scope.setPreviewImageUrl = function(image) {
		scope.currentImageUrl = image.url;
	}

	scope.listAlbums = function() {
		//test
		console.log('Albums Refreshed');
		// retrieve albums
		albumService.listAlbums(rootScope.userKey).then(function(response) {
			scope.albumList = response.data;
		});
	}

	// Modals
	scope.openCreateAlbumModal = function() {
		var modalInstance = modal.open({
			templateUrl : 'modals/album/create_album.jsp',
			controller : 'createAlbumModalController',
		});

		modalInstance.result.then(function() {
			scope.listAlbums();
		}, function() {
			console.log('Modal dismissed');
		});
	}

	scope.openDeleteAlbumModal = function(album) {
		var modalInstance = modal.open({
			templateUrl : 'modals/album/delete_album.jsp',
			controller : 'deleteAlbumModalController',
			resolve:{
				selectedAlbum: function(){
					return album;
				}
			}
		});
		
		modalInstance.result.then(function() {
			scope.listAlbums();
		}, function() {
			console.log('Modal dismissed');
		});
	}

	scope.openAddImageModal = function() {
		var modalInstance = modal.open({
			templateUrl : 'modals/image/add_image.jsp',
			controller : 'imageModalController',
			resolve : {
				albumList : function() {
					return scope.albumList;
				}
			}
		});
	}

	scope.openShareAlbumModal = function() {
		var modalInstance = modal.open({
			templateUrl : 'modals/album/share_album.jsp',
			controller : 'albumModalController'
		});
	}
	
	userService.getCurrentUser().then(function(response){
		if(response.data.isUserLoggedIn){				
			scope.isLoggedIn = true;		
			rootScope.userEmail = response.data.email;
			rootScope.logoutURL = response.data.logoutURL;
			rootScope.userKey = response.data.userKey;	
			// test
			scope.listAlbums();
		}
	});
	
	
} 
