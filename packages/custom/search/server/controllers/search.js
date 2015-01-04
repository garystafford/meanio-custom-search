'use strict';

var request = require('request');
//require('request').debug = true;

exports.getSearchResults = function (req, res) {
    function constructUrl() {
        var host = 'https://www.googleapis.com/customsearch/v1',
            args = {
                'cse_id'     : process.env.GOOGLE_CSE_ID,
                'search_term': req.params.search_term,
                'num'        : '10',
                'api_key'    : process.env.GOOGLE_API_KEY
            },
            params = ('?cx=' + args.cse_id + '&q=' + args.search_term +
            '&num=' + args.num + '&key=' + args.api_key);
        return host + params;
    }

    request.get(constructUrl(), function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/javascript');
            res.jsonp({
                'statusCode': 200,
                'items'     : JSON.parse(body).items
            });
        } else {
            console.error(error);
        }
    });
};