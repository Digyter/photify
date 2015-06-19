<div class="album_list">
	<p>
		<span>Albums </span>
		<button type="button" class="btn btn-primary" ng-click="openCreateAlbumModal()">
	    	New
	    </button>
	</p>
	<ul>
		<li ng-repeat="album in albumList">
			{{album.name}}
		</li>
	</ul>
</div>