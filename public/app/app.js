angular.module('myAngularApp', ['ngResource', 'ngRoute']);

angular.module('myAngularApp').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider
    .when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'});
});

angular.module('myAngularApp').controller('mainCtrl', function($scope){
    $scope.myVar = "Angular working";
});
    
