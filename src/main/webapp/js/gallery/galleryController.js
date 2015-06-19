angular
	.module('photify')
	.controller('galleryController',['$scope', '$rootScope', '$modal', 'albumService', 'imageService', galleryController]);

function galleryController(scope,rootScope,modal, albumService, imageService){
	scope.albumList = [];
	
	//retrieve albums
	albumService.listAlbums(1).then(function(response){
		scope.albumList = response.data;
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