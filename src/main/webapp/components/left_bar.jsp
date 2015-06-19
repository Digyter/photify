<div class="album_list" ng-controller="albumController">
	<p>
		<span>Albums </span>
		<button type="button" class="btn btn-primary" ng-click="openCreateModal()">
	    	New
	    </button>
	</p>
	<ul>
		<li ng-repeat="album in albumList">
			{{album.name}}
		</li>
	</ul>
</div>