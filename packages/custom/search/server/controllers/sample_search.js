'use strict';

/* This is used for testing so you don't have to call
 Google Custom Search which is limited to 100 call/day */

var fs = require('fs');

function getSampleData(callback) {
    function readData() {
        fs.readFile(__dirname + '/sample_data.js', 'utf8', function (err, data) {
            if (err) {
                return callback(err);
            }
            data = obfuscateData(data);
            callback(data);
        });
    }

    function obfuscateData(body) {
        var regex = new RegExp(process.env.GOOGLE_CSE_ID, 'g');
        body = body.replace(regex, '<GOOGLE_CSE_ID>');
        regex = new RegExp(process.env.GOOGLE_API_KEY, 'g');
        body = body.replace(regex, '<GOOGLE_API_KEY>');
        return body;
    }

    readData();
}

exports.getSampleSearchResults = function (req, res) {
    getSampleData(function (data) {
        console.log(data.substr(0, 2000));
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.end(data);
    }, function (err) {
        console.error(err);
    });
};