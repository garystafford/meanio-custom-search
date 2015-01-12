'use strict';

var search = require('../controllers/search');
var sample = require('../controllers/searchSampleData');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function (Search, app) {

    app.route('/customsearch/:search_term/:result_count')
        .get(search.getSearchResults);

    app.route('/customsearch/:search_term')
        .get(search.getSearchResults);

    app.param('search_term', search.getSearchResults);
    app.param('result_count', search.getSearchResults);

    app.route('/sample') // sample foo data
        .get(sample.getSampleSearchResults);
};
