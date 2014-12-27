'use strict';

/* jshint -W098 */
angular.module('mean.search').controller('SearchController', ['$scope', '$stateParams', 'Global', 'Search',
    function ($scope, $stateParams, Global, Search) {
        $scope.global = Global;
        $scope.package = {
            name: 'search'
        };
        $scope.customSearchResults = {};
        $scope.search_term = '';

        $scope.submit = function () {
            if ($scope.search_term.trim()) { // if input is not blank...
                Search.get({
                    search_term: $scope.search_term.trim()
                }, function (results) {
                    $scope.customSearchResults = results;
                    console.log('Results: ' + $scope.customSearchResults);
                }, function (error) {
                    console.error(error);
                });
            }
        };
    }
]);
