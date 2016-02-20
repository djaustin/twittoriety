angular.module('twittoriety', []).controller('InputController', ['$scope', function($scope){
  $scope.userInput = "";
  $scope.shout = function(){
    alert("HI")
  }

}]);
