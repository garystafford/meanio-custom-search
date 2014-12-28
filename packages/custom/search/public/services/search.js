'use strict';

angular.module('mean.search').factory('Search', ['$http', '$q',
    function ($http, $q) {
        var deferred = $q.defer();
        var urlBase = '/search';

        return {
            getCustomSearchResults: function (search_term) {
                $http.jsonp(urlBase + '/' + search_term)
                    .then(function (response) {
                        deferred.resolve(response.data.items);
                    });
                return deferred.promise;
            }
        };
    }
]);
