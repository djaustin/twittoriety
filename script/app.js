angular.module('twittoriety', []).controller('InputController', ['$scope', function($scope){
  $scope.userInput = "";
  $scope.similarity = 0;
  $scope.compare = function(userTweet, sampleTweet){
    var levenshtein = new Levenshtein(userTweet, sampleTweet);
    $scope.similarity = levenshtein.distance
  }
  $scope.sampleTweet = 'but if the self proclaimed cockiest person in the world can lay his personal business on the line then please people see my heart.';



}]);
