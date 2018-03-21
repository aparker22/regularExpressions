var regex = require('./main');
var request = require('request-promise');
var fs = require('fs');
var promisify = require('util').promisify

var rawData = '';
var url = 'https://en.wikipedia.org/wiki/List_of_The_Office_(U.S._TV_series)_episodes';
var file = 'theOffice.txt';
var readFile = promisify(fs.readFile);
var writeFile = promisify(fs.writeFile);

//this requests the html file containing all office episodes
request({
    "method":"GET", 
    "uri": url,
})
.then(function(body) {
    return writeFile(file, body)
})
.then (function(body) {
    return readFile(file)
})
.then (function(file) {
    var file = file.toString()
    var matches = file.match(regex.html);
    console.log(matches);
})
