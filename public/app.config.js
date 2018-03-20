angular.module('manageTasksApp').config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
      template: '<task-list></task-list>'
    }).when('/edit', {
      template: '<edit-task></edit-task>'
    }).otherwise('/');
  }
]);