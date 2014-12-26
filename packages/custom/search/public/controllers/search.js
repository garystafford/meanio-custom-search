'use strict';

/* jshint -W098 */
angular.module('mean.search').controller('SearchController', ['$scope', 'Global', 'Search',
    function ($scope, Global, Search) {
        $scope.global = Global;
        $scope.package = {
            name: 'search'
        };

        $scope.customSearchResults = {'test' : '123'};

        Search.getSearchResults()
            .then(function (response) {
                $scope.customSearchResults = response.data.items;
                console.log($scope.customSearchResults);
            }, function (error) {
                console.error(error);
            });
    }
]);