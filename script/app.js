angular.module('twittoriety', []).controller('InputController', ['$scope', '$http', function($scope, $http){
  $scope.userInput = "";
  $scope.difference = 0;
  $scope.tweets = [];
  $scope.matchedTweet = "";
  $scope.compare = function(userTweet, sampleTweet){
    var levenshtein = new Levenshtein(userTweet, sampleTweet);
    return levenshtein.distance;
  }

  // Request top level database from firebase app
  $scope.submit = function(){
    $http.get("https://shining-inferno-8502.firebaseio.com/data.json").then(function(response){
    $scope.tweets = []
    // Append tweets of entry entryID to tweets array
      var tweets = response.data;
      for (var i = 1; i < tweets.length; i++) {
        var newObj = tweets[i]
        newObj.difference = $scope.compare($scope.userInput, tweets[i].text)
        $scope.tweets.push(newObj)
      }


    var smallestDifference = 140;
    $scope.matchedTweet = null;
    for (var i = 0; i < $scope.tweets.length; i++) {
      if ($scope.tweets[i].difference < smallestDifference){
        smallestDifference = $scope.tweets[i].difference;
        $scope.matchedTweet = $scope.tweets[i];
      }
    }
    })
  }




}]);
