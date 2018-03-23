angular.module('taskList').component('taskList', {
  templateUrl: 'task-list/task-list.html',
  controller: ['SharedData', '$scope', 'InitialTasks', '$routeParams', '$location', function (SharedData, $scope, InitialTasks, $routeParams, $location) {
    $scope.createTasks = SharedData;

    $scope.addTask = () => {
      let taskToDo = $scope.taskToDo;

      if (taskToDo && $scope.createTasks.tasks.indexOf(taskToDo) == -1) {
        $scope.createTasks.tasks.push({name: taskToDo, completed: false, date: Date.now(), id: Date.now(), edit: false});
        $scope.taskToDo = '';
      }
    };

    $scope.sortBy = (propertyName) => {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
  }
  ]
});