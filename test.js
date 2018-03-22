var regex = require('./main')
var assert = require('assert')

//Testing stock tickers
assert(regex.stocks.test('AAPL'), 'This is a valid Stock ticker');
assert(!regex.stocks.test('GOOGLE'), 'This is not a vaild stock ticker');
assert(!regex.stocks.test('A124'), 'Stock tickers do not include numbers');

//Testing Credit Card Numbers
assert(regex.credit.test('1234123412341234'), 'Credit cards have 16 numeric digits');
assert(!regex.credit.test('abcdabcdabcdabcd'), 'Credit cards are numeric and do not contain letters');
assert(regex.credit.test('1234-1234-1234-1234'), 'Credit cards can contain dashes');
assert(!regex.credit.test('12345123451234512345'), 'Cannot have more than 16 digits')

//Testing Links
assert(regex.links.test('https://www.google.com'), 'Google is a valid url');
assert(regex.links.test('https://google.com'), 'Google is a valid url even with out www');
assert(regex.links.test('http://facebook.com/mysite.html?q=hello'), 'URLs can contain information following .com');
assert(!regex.links.test('www.google.com'), 'URLs should start with http');

//Testing html
assert(regex.html.test('<td class="summary" style="text-align:left">"<a href="/wiki/Diversity_Day_(The_Office)" title="Diversity Day (The Office)">Diversity Day</a>"</td>'), 'This works in the browser');

