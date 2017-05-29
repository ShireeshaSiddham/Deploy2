// Generated on : 24-Jan-2017 11:18:15
'use strict';

angular.
	 module('mainModule').
	 component('mainComponent', {
	     templateUrl: 'js/deploy_app/main/main.template.html',

	 })

.controller('DemoBasicCtrl', function DemoCtrl($scope, $mdDialog) {
  
    this.settings = {
        printLayout: true,
        showRuler: true,
        showSpellingSuggestions: true,
        presentationMode: 'edit'
    };

    $scope.buttonShow = true;
    $scope.openShow = true;

    this.sampleAction = function (name, ev) {
        if (name == "Home") {
            window.location.href = "http://localhost:8081/app/index.html#!/login"
        }
        else if (name == "CreateIssue") {
            
        }
        else if (name == "AllIssues") {
        }
        else {
            $mdDialog.show($mdDialog.alert()
              .title(name)
              .textContent('You triggered the "' + name + '" action')
              .ok('Great')
              .targetEvent(ev)
            );
        }
    };

    $scope.logout = function () {
        sessionStorage.clear();
        window.location = 'http://localhost:8081/app/index.html#!/login';
    };
});