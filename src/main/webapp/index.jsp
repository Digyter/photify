<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Photify</title>
	
	<script src="lib/bower_components/angular/angular.min.js"></script>
	<script src="lib/bower_components/angular-route/angular-route.min.js"></script>
	<script src="lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
	<script src="lib/bower_components/angular-ui-utils/ui-utils.js"></script>
	<script src="lib/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
	<script src="lib/bower_components/angular-ui-select/dist/select.min.js"></script>
	<script src="js/photify.module.js"></script>
	<script src="js/album/albumService.js"></script>
	<script src="js/album/albumModalController.js"></script>
	<script src="js/image/imageService.js"></script>
	<script src="js/image/imageModalController.js"></script>
	<script src="js/gallery/galleryController.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/main.css" />
	<link rel="stylesheet" type="text/css" href="lib/bower_components/bootstrap/dist/css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="lib/bower_components/angular-ui-select/dist/select.css" />
</head>
<body ng-app="photify">
	<div class="pageWrapper">
		<div class="header">
			<div ng-include src="'components/header.jsp'"></div>
		</div>
		<div class="main" ng-controller="galleryController">
			<div class="leftBar">
				<div ng-include src="'components/left_bar.jsp'"></div>
			</div>
			<div class="content">
				<div ng-include src="'components/preview.jsp'"></div>
			</div>
			<div class="bottomBar">
				<div class="infoBar">
				</div>
				<div class="pictureList">
					<div ng-include src="'components/picture_list.jsp'"></div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>