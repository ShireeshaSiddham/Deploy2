'use strict';

angular.module('deployApp',
		[
		 	'ngRoute'
            , 'ngAnimate'
            , 'ngAria'
            , 'ngMaterial'
            ,'ngCookies'
            , 'mainModule'
            , 'ConcentoAuthentication'
		]);

angular.module('deployApp')
	.filter('unsafe', function ($sce) {

	    return function (val) {

	        return $sce.trustAsHtml(val);

	    };

	});