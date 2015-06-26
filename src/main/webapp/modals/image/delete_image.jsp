<div class="modal-header">
	<h3 class="modal-title">Delete Image</h3>
</div>
<div class="modal-body">
	<p>
		Are you sure you want to delete the image '{{selectedImage.name}}'?
	</p>
</div>
<div class="modal-footer">
	<button type="button" class="btn btn-primary" ng-click="deleteImage()">
    	OK
    </button>
    <button type="button" class="btn btn-primary" ng-click="cancel()">
    	Cancel
    </button>
</div>