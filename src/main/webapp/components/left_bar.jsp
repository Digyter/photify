<div class="album_list">
	<div class="leftBarHeader">
		<span class="title">Albums </span>
		<button type="button" class="btn btn-primary" ng-click="openCreateAlbumModal()">
	    	New
	    </button>
	</div>
	<span class="btn btn-default" ng-repeat="album in albumList track by album.key" ng-click="switchAlbum(album)">
		{{album.name}}
		<button type="button" class="close" aria-label="Close" ng-click="openDeleteAlbumModal(album)"><span aria-hidden="true">&times;</span></button>
	</span>
</div>