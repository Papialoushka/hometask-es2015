angular.module('manageTasksApp').config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider.when('/', {
      template: '<task-list></task-list>'
    }).when('/edit/:taskId/', {
      template: '<edit-task></edit-task>'
    }).otherwise('/');
  }
]);