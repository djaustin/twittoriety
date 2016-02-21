var Twitter = require('twitter');
    
    var client = new Twitter({
        consumer_key: 'lXQc7ynXLHDVO4w8Em2bZXrDD',
        consumer_secret: 'XHxl5GDuYkP3VgiOy0r5KupE1K19w0a3wDA0EOuK4sQhmdzSe0',
        access_token_key: '365480032-SL5ZyzZBV7uaCwVuWBkUlpixNGPEZD4FXbDDWGbk',
        access_token_secret: 'J7Q8otQRWfom49Ku9n4AZOADJzuAD59Ar9YQ5PwXDmvnc',  
    });


client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response){
   console.log(tweets);
});


/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
/*client.stream('statuses/filter', {track: 'twitter'},  function(stream){
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
*/