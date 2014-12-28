'use strict';

/**
 * List of Search Results
 */
var request = require('request');
require('request').debug = true;

// This is used for testing so you don't have to call google (limited to 100 call/day)
// change these 2 lines: host = 'http://localhost:80' and res.end(_test_data);
// test directly: node packages/custom/search/server/controllers/search.js
var fs = require('fs');
var _test_data = {};

fs.readFile(__dirname + '/test_response.js', 'utf8', function (err, results) {
    if (err) {
        return console.log(err);
    }
    console.log(results);
    _test_data = results;
});

exports.getSearchResults = function (req, res, search_term) {
    var _search_term = req.params.search_term,
        host = 'https://www.googleapis.com/customsearch/v1',
        args = {
            'cse_id'     : process.env.GOOGLE_CSE_ID,
            'search_term': _search_term,
            'num'        : '10',
            'api_key'    : process.env.GOOGLE_API_KEY,
            'callback'   : 'angular.callbacks._0'
        },
        params = ('?cx=' + args.cse_id + '&q=' + args.search_term +
        '&num=' + args.num + '&key=' + args.api_key + '&callback=' + args.callback),
        url = host + params;

    request.get(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(body);
        }
    });
};