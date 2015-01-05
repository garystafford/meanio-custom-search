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
        $scope.result_count = 10;
        $scope.submit = function () {
            $scope.search_term = $scope.search_term.trim();
            if ($scope.search_term) { // if input is not blank...
                Search.getCustomSearchResults($scope.search_term, $scope.result_count)
                    .then(function (results) {
                        $scope.customSearchResults = results.data.items;
                    });
            }
        };
    }
]);
