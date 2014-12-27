'use strict';

angular.module('mean.search').factory('Search', ['$resource',
    function($resource) {
        return $resource('/search/:search_term');
    }
]);
