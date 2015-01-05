'use strict';

angular.module('mean.search').factory('Search', ['$http',
    function ($http) {
        return {
            getCustomSearchResults: function (search_term, result_count) {
                var urlBase = '/customsearch',
                    callbackName = 'JSON_CALLBACK',
                    url = urlBase + '/' + search_term + '/' + result_count + '?callback=' + callbackName;

                return $http.jsonp(url);
            }
        };
    }
]);
