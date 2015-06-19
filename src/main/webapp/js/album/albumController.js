angular
	.module('photify')
	.controller('albumController',['$scope', '$rootScope', '$modal', 'albumService', albumController]);

function albumController(scope,rootScope,modal, albumService){
	scope.albumList = [];
	
	//retrieve Albums
	albumService.listAlbums(1).then(function(response){
		scope.albumList = response.data;
	});
	
	scope.openCreateModal = function(){
		var modalInstance = modal.open({
			animation: scope.animationsEnabled,
			templateUrl: 'modals/album/create_album.jsp'
		});
	}
}