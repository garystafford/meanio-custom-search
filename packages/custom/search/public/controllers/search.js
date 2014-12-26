'use strict';

/* jshint -W098 */
angular.module('mean.search').controller('SearchController', ['$scope', 'Global', 'Search',
    function ($scope, Global, Search) {
        $scope.global = Global;
        $scope.package = {
            name: 'search'
        };
        $scope.customSearchResults = {};
        $scope.search_term = '';

        $scope.submit = function () {
            if ($scope.search_term.trim()) { // if input is not blank...
                Search.getSearchResults(this.search_term.trim())
                    .then(function (response) {
                        $scope.customSearchResults = response.data.items;
                        $scope.search_term = ''; // clear form field
                    }, function (error) {
                        console.error(error);
                    });
            }
        };
    }
]);