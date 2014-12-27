'use strict';

/**
 * List of Search Results
 */
//var http = require('http');
var request = require('request');
require('request').debug = true;

exports.getSearchResults = function (req, res, search_term) {
    var _search_term = req.params.search_term,
        host = 'https://www.googleapis.com/customsearch/v1',
        args = {
            'cse_id'     : process.env.GOOGLE_CSE_ID,
            'search_term': _search_term,
            'num'        : '10',
            'api_key'    : process.env.GOOGLE_API_KEY,
            'callback'   : 'JSON_CALLBACK'
        },
        params = ('?cx=' + args.cse_id + '&q=' + args.search_term +
        '&num=' + args.num + '&key=' + args.api_key + '&callback=' + args.callback);

    request.get(host + params, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.end(response.body);
        }
    });
};