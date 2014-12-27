'use strict';

angular.module('mean.search').service('Search', ['$http',
    function ($http) {

        var urlBase = '/search';

        this.getCustomSearchResults = function (search_term) {
            return $http.get(urlBase + '/' + search_term);
        };
    }
]);
