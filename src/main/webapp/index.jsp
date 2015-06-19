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
	<script src="js/photify.module.js"></script>
	<script src="js/album/albumService.js"></script>
	<script src="js/album/albumController.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/main.css" />
	<link rel="stylesheet" type="text/css" href="lib/bower_components/bootstrap/dist/css/bootstrap.css" />
</head>
<body ng-app="photify">
	<div class="pageWrapper">
		<div class="header">
			<h1>Header goes here </h1>
		</div>
		<div class="main">
			<div class="leftBar">
				<div ng-include src="'components/left_bar.jsp'"></div>
			</div>
			<div class="content">
				<h2>Main content here </h2>
			</div>
			<div class="bottomBar">
				<div class="infoBar">
				</div>
				<div class="pictureList">
					
				</div>
			</div>
		</div>
	</div>
</body>
</html>