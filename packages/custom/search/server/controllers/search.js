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
                'api_key'    : process.env.GOOGLE_API_KEY,
                'callback'   : 'angular.callbacks._0'
            },
            params = ('?cx=' + args.cse_id + '&q=' + args.search_term +
            '&num=' + args.num + '&key=' + args.api_key + '&callback=' + args.callback);
        return host + params;
    }

    function obfuscateData(body) {
        var regex = new RegExp(process.env.GOOGLE_CSE_ID, 'g');
        body = body.replace(regex, '<GOOGLE_CSE_ID>');
        regex = new RegExp(process.env.GOOGLE_API_KEY, 'g');
        body = body.replace(regex, '<GOOGLE_API_KEY>');
        return body;
    }

    request.get(constructUrl(), function (error, response, body) {
        if (!error && response.statusCode === 200) {
            body = obfuscateData(body);
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(body);
        } else {
            console.error(error);
        }
    });
};