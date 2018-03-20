angular.module('manageTasksApp').config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/add', {
      template: '<task-list></task-list>'
    }).otherwise('/add');
  }
]);