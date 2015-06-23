<div class="modal-header">
	<h3 class="modal-title">Add Image</h3>
</div>
<div class="modal-body">
	<p>
		<label>Name:</label>
		<input type="text" ng-model="imageName"/>
	</p>
	<p>
		<label>URL:</label>
		<input type="text" ng-model="imageUrl"/>
	</p>
	<p>
		<label>Album:</label>
		<p>Selected: {{album.selected.key}}</p>
		<ui-select ng-model="album.selected" 
			theme="bootstrap"
			ng-disabled="disabled"
            reset-search-input="false"
            style="width: 300px;"
            title="Choose an album">
			<ui-select-match placeholder="Enter an album">{{$select.selected.name}}</ui-select-match>
			<ui-select-choices repeat="album in albumList">
	     		<span ng-bind-html="album.name | highlight: $select.search"></span>
	    	</ui-select-choices>
        </ui-select>
	</p>
</div>
<div class="modal-footer">
	<button type="button" class="btn btn-primary" ng-click="addImage()">
    	Save
    </button>
    <button type="button" class="btn btn-primary" ng-click="cancel()">
    	Cancel
    </button>
</div>
