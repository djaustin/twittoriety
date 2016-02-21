var Twitter = require('twitter');
var https = require('https');
var fs = require('fs');
var tweetInfo = []
var max_id = 700903096260685800;
var client = new Twitter({
    consumer_key: 'lXQc7ynXLHDVO4w8Em2bZXrDD',
    consumer_secret: 'XHxl5GDuYkP3VgiOy0r5KupE1K19w0a3wDA0EOuK4sQhmdzSe0',
    access_token_key: '365480032-SL5ZyzZBV7uaCwVuWBkUlpixNGPEZD4FXbDDWGbk',
    access_token_secret: 'J7Q8otQRWfom49Ku9n4AZOADJzuAD59Ar9YQ5PwXDmvnc',
});
var count = 0
function loop(limit){
  client.get('statuses/user_timeline', {"screen_name": "coffee_dad", "max_id": max_id}, function(error, tweets, response){
    if(error) console.log(error);
    console.log(tweets.length)
    tweets.forEach(function(tweet){
      tweetInfo.push({
        screen_name: "coffee_dad",
        id: tweet.id,
        text: tweet.text,
        retweets: tweet.retweet_count,
        favourites: tweet.favorite_count
      })
    max_id = tweets[tweets.length-1].id-1;
    })
    console.log(count)
    count += 1;
    if (count > limit){
      outputJSON()
      return;
    }
    loop(limit)
  });
}
loop(56)

function outputJSON(){
  fs.writeFile("coffee_dad.json", JSON.stringify(tweetInfo, null, 4), function(err){
    if (err) {console.log(err)}
})
}
// /**
//  * Stream statuses filtered by keyword
//  * number of tweets per second depends on topic popularity
//  **/
// client.stream('statuses/filter', {track: 'twitter'},  function(stream){
//   stream.on('data', function(tweet) {
//     console.log(tweet.retweeted_status.retweet_count);
//   });
//
//   stream.on('error', function(error) {
//     console.log('N/A')
//   });
// });
