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

        function loadData() {
            $scope.search_term = $scope.search_term.trim();
            if ($scope.search_term) { // if input is not blank...
                Search.getCustomSearchResults($scope.search_term)
                    .then(function (results) {
                        $scope.customSearchResults = results.data.items;
                    });
            }
        }

        $scope.submit = function () {
            loadData();
        };
    }
]);
