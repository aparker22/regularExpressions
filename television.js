var pattern = require('./main');
var request = require('request-promise');
var fs = require('fs');
var promisify = require('util').promisify


var url = 'https://en.wikipedia.org/wiki/List_of_The_Office_(U.S._TV_series)_episodes';
var file = 'theOffice.txt';
var writeFile = promisify(fs.writeFile)


//this requests the html file containing all office episodes
request({
    "method":"GET", 
    "uri": url,
})
.then(function(body) {
    var match= pattern.html.exec(body.toString())
    return match;
})
.then(function(match) {
    console.log(match);
});



