'use strict';

angular.
  module('deployApp')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/login', {
                template: '<authentication-component></authentication-component>',
                hideMenus: true
            })
            .when('/main', {
                template: '<main-component></main-component>'
            })
           
            .when('/', {
                template: '<main-component></main-component>'
            })
            .otherwise('/login');
    }
  ])
  .config(function ($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
		  // Allow same origin resource loads.
		  'self',
		  // Allow loading from our assets domain.  Notice the difference between * and **.
		  'http://localhost:60347/Services/**',
          'https://localhost:60347/Services/**',
          'http://10.10.10.27:8081/**'
      ]);
  })




.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            // $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);

