(function() {
  'use strict';

    anotherController.$inject = ['$scope'];
    function anotherController ($scope) {

    }

  angular.module('singApp.another')
    .controller('AnotherController', anotherController);

})();
