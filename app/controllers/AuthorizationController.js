
adminApp.controller('AuthorizationController',
    function AuthorizationController($scope,$cookies){


        $scope.Login=function () {

            console.log($scope.login);
            console.log($scope.password);

            // $scope.access_token='gggg';

            // $scope.access_token=data['accses-token'];
            $cookies.put('access_token', $scope.access_token);
            location.href = '#/main';

        }



    }
)