    angular.module('app', ['ngResource', 'ngRoute']);
    
        angular
            .module('app')
            .config(appConfig)
            .controller('mainCtrl', mainCtrl);
    
    function appConfig($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true); 
        
        $routeProvider
        .when('/test',{
            tempaleUrl: '/views/partials/main',
            controller: 'mainCtrl'
        })
    };
    
    function mainCtrl($scope){
        alert('test');
      $scope.myVar = "Hello ANgular";  
    };