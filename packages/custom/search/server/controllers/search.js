'use strict';

var request = require('request');
require('request').debug = true;

exports.getSearchResults = function (req, res) {
    function constructUrl() {
        var host = 'https://www.googleapis.com/customsearch/v1',
            args = {
                'cx' : process.env.GOOGLE_CSE_ID,
                'key': process.env.GOOGLE_API_KEY,
                'q'  : req.params.search_term,
                'num': req.params.result_count
            },
            params = ('?cx=' + args.cx + '&q=' + args.q + '&num=' + args.num + '&key=' + args.key);

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