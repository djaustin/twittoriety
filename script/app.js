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
    $http.get("https://shining-inferno-8502.firebaseio.com/users.json").then(function(response){
    $scope.tweets = []
    // Append tweets of entry entryID to tweets array
    function getTweets(entryID){
      var tweets = response.data[entryID].tweets
      for (var i = 1; i < tweets.length; i++) {
        $scope.tweets.push({
          content: tweets[i],
          difference: $scope.compare($scope.userInput, tweets[i])
        })
      }
    }

    for (var i = 1; i < response.data.length; i++) {
      getTweets(i);
    }

    var smallestDifference = 140;
    var closestTweet = "";

    for (var i = 0; i < $scope.tweets.length; i++) {
      if ($scope.tweets[i].difference < smallestDifference){
        smallestDifference = $scope.tweets[i].difference;
        closestTweet = $scope.tweets[i].content;
      }
    }


    $scope.matchedTweet = {
      content: closestTweet,
      difference: smallestDifference
    }
  })
}




}]);
