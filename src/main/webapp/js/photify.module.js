angular
		.module('photify', [ 'ngRoute', // routes
		'ngSanitize', // prereq for ui-select
		'ui.select', // input select
		'ui.bootstrap', // user interface
		'ui.utils', // keypress listening
		])
		.config(
				function($httpProvider) {
					// We need to setup some parameters for http requests
					// These three lines are all you need for CORS support
					$httpProvider.defaults.useXDomain = true;
					delete $httpProvider.defaults.headers.post['X-Requested-With'];
					$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

					// Override $http service's default transformRequest
					$httpProvider.defaults.transformRequest = function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    };
				});