(function() {
  'use strict';

  var module = angular.module('singApp.another', [
    'ui.router'
  ]);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.another', {
        url: '/another',
        templateUrl: 'app/modules/another-page/another.html',
        controller: 'AnotherController'
      })
  }
})();
