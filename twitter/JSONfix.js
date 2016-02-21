var fs = require('fs');
var screen_name = process.argv[2]
fs.readFile('test.json', "utf-8", function(err, data){
  if(!err){
    var json = JSON.parse(data)
    var newData = fixJSON(json)
    // fs.writeFile('test.json', JSON.stringify(newData, null, 4), function(err){
    //   if(err) console.log(err)
    // })
  }
})

function fixJSON(tweetList){
  var newData = []

  for (var i = 0; i < tweetList.length; i++) {
    //console.log(tweetList[i])
    newData.push({
      screen_name: screen_name,
      id: tweetList[i].id,
      text: tweetList[i].text,
      retweets: tweetList[i].retweets,
      favourites: tweetList[i].favourites
    })
  }
  console.log(newData)
  return newData
}
