var adminApp = angular.module('adminApp', ["ngRoute",'ngCookies'])
    .config(function($routeProvider){

        $routeProvider.when('/authorization',
            {
                templateUrl:'app/views/authorization.html',
                controller:'AuthorizationController'
            });
        $routeProvider.when('/main',
            {
                templateUrl:'app/views/main.html',
                controller:'MainController'
            });
        $routeProvider.when('/mainPM',
            {
                templateUrl:'app/views/mainPM.html',
                controller:'MainController'
            });
        $routeProvider.when('/AllUsers',
            {
                templateUrl:'app/views/AllUsers.html',
                controller:'MainController'
            });
        

        // $routeProvider.otherwise({redirectTo: '/console'});
    });



adminApp.run(function($rootScope,$cookies){

    $rootScope.access_token = $cookies.get('access_token');

    // console.log($rootScope.access_token );

    if(!$rootScope.access_token){
        location.href = '#/authorization';
    }else
    {
        // config.headers['access-token']=$rootScope.access_token;
        location.href = '#/main';
    }


})

.controller('mainController', function($scope) {

    $scope.data = {visible: false};


    $scope.myObj = {
        "width": "74%"
    }

    $scope.go = function() {
        $scope.data.visible=!$scope.data.visible;
        $scope.myObj = {
            "width": "96%"
        }
    }

    $scope.gofirt = function() {
        $scope.data.visible=!$scope.data.visible;
        $scope.myObj = {
            "width": "74%"
        }
    }
});
