'use strict';
 
angular.
	 module('ConcentoAuthentication').
	 component('authenticationComponent', {
	     templateUrl: 'js/deploy_app/authentication/login.template.html'
	 });


angular.module('ConcentoAuthentication')
    .controller('login_controller',
        ['$scope', '$rootScope', '$location', 'AuthenticationService',
            function ($scope, $rootScope, $location, AuthenticationService) {


                // reset login status
                AuthenticationService.ClearCredentials();
 
                $scope.login = function () {
                    $scope.dataLoading = true;
                    AuthenticationService.Login($scope.username, $scope.password, function(response) {
                        //if(response.statusText=="OK") {
                        if (response.success == true) {
                            AuthenticationService.SetCredentials($scope.username, $scope.password);
                            $location.path('/');
                        } else {
                            response.message = 'Username or password is incorrect';
                            $scope.error = response.message;
                            $scope.dataLoading = false;
                        }

                    });
                };
    }]);