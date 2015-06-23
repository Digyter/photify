angular
	.module('photify')
	.controller('albumModalController',['$scope', '$rootScope', '$modalInstance', 'albumService', albumModalController]);

function albumModalController(scope, rootScope, modalInstance, albumService){
	scope.createAlbum = function(){
		albumService.createAlbum(scope.albumName,rootScope.userKey);
		modalInstance.close();
	}
	scope.deleteAlbum = function(){
		albumService.deleteAlbum(scope.albumKey, rootScope.userKey);
		modalInstance.close();
	}
	
	scope.cancel = function () {
		modalInstance.close();
	};
}