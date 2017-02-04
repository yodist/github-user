// by yodist

var gitUI = angular.module('app', []);
var username = "yodist";


gitUI.controller('githubData', ['$scope', '$http', function($scope, $http) {
  $scope.find = function() {
    username = $scope.username;
    $http.get("https://api.github.com/users/" + username)
      .success(function(data) {
        $scope.userData = data;
      });
  };

}]);
