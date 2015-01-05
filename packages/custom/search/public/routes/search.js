'use strict';

angular.module('mean.search').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('search example page', {
      url: '/search',
      templateUrl: 'search/views/index.html'
    });
  }
]);
