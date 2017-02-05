// by yodist

var gitUI = angular.module('app', []);
var username = "yodist";
var date = "";

gitUI.controller('githubData', ['$scope', '$http', function($scope, $http) {

  $scope.find = function() {
    $scope.display = function() {
      return true;
    };
    username = $scope.username;
    $http.get("https://api.github.com/users/" + username)
      .success(function(data) {
        $scope.userData = data;
      });
  };

}]);
