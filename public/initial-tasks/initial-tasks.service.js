angular.module('initialTasks').factory('InitialTasks',
  function ($resource) {
    return $resource('resources/initial-tasks.json');
  });