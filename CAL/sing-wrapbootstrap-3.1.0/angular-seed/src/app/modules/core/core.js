(function() {
  'use strict';

  angular
    .module('singApp.core')
    .controller('App', AppController)
    .factory('jQuery', jQueryService)
    .factory('$exceptionHandler', exceptionHandler)
  ;

  AppController.$inject = ['config', '$scope', '$localStorage', '$state'];
  function AppController(config, $scope, $localStorage, $state) {
    /*jshint validthis: true */
    var vm = this;

    vm.title = config.appTitle;

    $scope.app = config;
    $scope.$state = $state;

    if (angular.isDefined($localStorage.state)){
      $scope.app.state = $localStorage.state;
    } else {
      $localStorage.state = $scope.app.state;
    }
  }

  jQueryService.$inject = ['$window'];

  function jQueryService($window) {
    return $window.jQuery; // assumes jQuery has already been loaded on the page
  }

  exceptionHandler.$inject = ['$log', '$window', '$injector'];
  function exceptionHandler($log, $window, $injector) {
    return function (exception, cause) {
      var errors = $window.JSON.parse($window.localStorage.getItem('sing-angular-errors')) || {};
      errors[new Date().getTime()] = arguments;
      $window.localStorage.setItem('sing-angular-errors', $window.JSON.stringify(errors));
      $injector.get('config').debug && $log.error.apply($log, arguments);
      $injector.get('config').debug && $window.alert('check errors');
    };
  }
})();
