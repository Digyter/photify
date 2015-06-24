angular
	.module('photify')
	.controller('createAlbumModalController',['$scope', '$rootScope', '$modalInstance', 'albumService', createAlbumModalController]);

function createAlbumModalController(scope, rootScope, modalInstance, albumService){	
	scope.createAlbum = function(){
		albumService.createAlbum(rootScope.userKey,scope.albumName);
		modalInstance.close();
	}
	
	scope.cancel = function () {
		modalInstance.dismiss('cancel');
	};
}