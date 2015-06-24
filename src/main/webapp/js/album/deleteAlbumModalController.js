angular
	.module('photify')
	.controller('deleteAlbumModalController',['$scope', '$rootScope', '$modalInstance', 'selectedAlbum', 'albumService', deleteAlbumModalController]);

function deleteAlbumModalController(scope, rootScope, modalInstance, selectedAlbum, albumService){
	scope.selectedAlbum = selectedAlbum;
	
	scope.deleteAlbum = function(){
		albumService.deleteAlbum(rootScope.userKey,scope.selectedAlbum.key);
		modalInstance.close();
	}
	
	scope.cancel = function () {
		modalInstance.dismiss('cancel');
	};
}