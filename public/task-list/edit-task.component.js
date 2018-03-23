angular.module('taskList').component('editTask', {
  templateUrl: 'edit-task/edit-task.html',
  controller: ['$scope', 'InitialTasks', '$routeParams', '$location', 'SharedData', function ($scope, InitialTasks, $routeParams, $location, SharedData) {
    $scope.createTasks = SharedData;

    $scope.toggleEditMode = function () {
      const id = $routeParams.taskId;
      const item = $scope.createTasks.tasks.find((value) => value.id === id);
      $scope.createTasks.newTaskName = item.name;
      $scope.createTasks.newTaskDate = item.date;
      $scope.createTasks.newTaskCompleted = item.completed;
    };

    $scope.saveTask = function () {
      const id = $routeParams.taskId;

      const index = $scope.createTasks.tasks.findIndex(function (value) {
        return value.id === id;
      });

      const item = $scope.createTasks.tasks.find(function (value) {
        return value.id === id;
      });

      item.name = this.newTaskName;
      item.date = this.newTaskDate;
      item.completed = this.newTaskCompleted;

      $scope.createTasks.tasks[index] = item;
    };
  }
  ]
});