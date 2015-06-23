<div class="modal-header">
	<h3 class="modal-title">New Album</h3>
</div>
<div class="modal-body">
	<p>
		<label>Name:</label>
		<input type="text" ng-model="albumName" />
	</p>
</div>
<div class="modal-footer">
	<button type="button" class="btn btn-primary" ng-click="createAlbum()">
    	Save
    </button>
    <button type="button" class="btn btn-primary" ng-click="cancel()">
    	Cancel
    </button>
</div>
