<div class="album_info">
	<span class="title">{{currentAlbum.name}}</span>
	<button type="button" class="btn btn-primary" ng-click="openShareAlbumModal()">
		Share
	</button>
</div>
<div class="image_list">
	<img src="../images/blue_plus.png" alt="140x140" class="img-thumbnail" ng-click="openAddImageModal()" />
	<img class="img-thumbnail" ng-repeat="image in imageList" src="{{image.url}}" ng-click="setPreviewImageUrl(image)" />
</div>