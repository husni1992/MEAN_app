angular.module('myAngularApp').controller('mainCtrl', function($scope){
    $scope.myVar = "Angular working";
    $scope.courses = [
          {
            "name": "Tabatha",
            "gender": "female",
            "featured": true,
            "published": new Date("October 13, 2014 11:13:00")
          },
          {
            "name": "Gale",
            "gender": "female",
            "featured": true,
            "published": new Date("October 13, 2014 11:13:00")
          },
          {
            "name": "Downs",
            "gender": "male",
            "featured": true,
            "published": new Date("October 13, 2014 11:13:00")
          },
          {
            "name": "Mayra",
            "gender": "female",
            "featured": false,
            "published": new Date("October 13, 2014 11:13:00")
          },
          {
            "name": "Michael",
            "gender": "male",
            "featured": false,
            "published": new Date("October 13, 2014 11:13:00")
          },
          {
            "name": "Hubbard",
            "gender": "male",
            "featured": false,
            "published": new Date("October 13, 2014 11:13:00")
          }
        ];
});
    