'use strict';

var search = require('../controllers/search');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function (Search, app, auth, database) {

    app.route('/search/:search_term')
        .get(search.getSearchResults);

    app.param('search_term', search.getSearchResults);
};
