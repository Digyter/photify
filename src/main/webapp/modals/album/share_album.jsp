<div class="modal-header">
	<h3 class="modal-title">Share Album</h3>
</div>
<div class="modal-body">
	<h4>Album 1</h4>
	<label>Shared to:</label>
	<ul>
		<li ng-repeat="sharee in shareeList">
		</li>
	</ul>
	<p>
		<label>Share to:</label>
		<ui-select ng-model="album.selected" 
			theme="bootstrap"
			ng-disabled="disabled"
            reset-search-input="false"
            style="width: 300px;"
            title="Enter email address">
			<ui-select-match placeholder="Enter email address...">{{$select.selected.name}}</ui-select-match>
			<ui-select-choices repeat="user in userList">
	     		<span ng-bind-html="user.name | highlight: $select.search"></span>
	    	</ui-select-choices>
        </ui-select>
	</p>
</div>
<div class="modal-footer">
	<button type="button" class="btn btn-primary">
    	OK
    </button>
    <button type="button" class="btn btn-primary" ng-click="cancel()">
    	Cancel
    </button>
</div>
