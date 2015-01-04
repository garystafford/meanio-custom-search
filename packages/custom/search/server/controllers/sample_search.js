'use strict';

/* This is used for testing so you don't have to call
 Google Custom Search which is limited to 100 call/day */

var fs = require('fs');

function getSampleData(callback) {
    function readData() {
        fs.readFile(__dirname + '/sample_data.json', 'utf8', function (err, data) {
            if (err) {
                return callback(err);
            }
            var results = JSON.parse(data).items;
            callback(results);
        });
    }
    readData();
}

exports.getSampleSearchResults = function (req, res) {
    getSampleData(function (data) {
        res.type('application/javascript');
        res.jsonp({
            'statusCode': 200,
            'items': data
        });
    }, function (err) {
        console.error(err);
    });
};