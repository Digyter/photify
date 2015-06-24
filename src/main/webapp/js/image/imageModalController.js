angular
	.module('photify')
	.controller('imageModalController',['$scope', '$rootScope', '$modalInstance', 'albumList', 'imageService', imageModalController]);

function imageModalController(scope, rootScope, modalInstance, albumList, imageService){
	scope.albumList = albumList;
	scope.album = {};
	scope.album.selected = scope.albumList[0];
	
	scope.addImage = function(){
		imageService.addImage(rootScope.userKey,scope.album.selected.key,scope.imageName,scope.imageUrl);
		modalInstance.close();
	}
	
	scope.cancel = function () {
		modalInstance.close();
	};
}