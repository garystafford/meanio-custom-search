'use strict';

angular.module('mean.search').factory('Search', ['$http',
    function ($http) {
        return {
            getCustomSearchResults: function (search_term) {
                var urlBase = '/search',
                    callbackName = 'JSON_CALLBACK',
                    url = urlBase + '/' + search_term + '?callback=' + callbackName;

                return $http.jsonp(url);
            }
        };
    }
]);
