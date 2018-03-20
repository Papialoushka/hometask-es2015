angular.module('editTask').component('editTask', {
  templateUrl: 'edit-task/edit-task.html',
  controller: function ($scope, InitialTasks, $routeParams, $location) {
    $scope = true;
    const taskToEdit = this;
    this.tasks = $scope.tasks;
    const tasks = this.tasks;

    $scope.toggleEditMode = function () {
      const id = +$routeParams.id;
      const item = $scope.tasks.find(function (value) {
        return value.id === id;
      });
      console.log(item);
      $scope.newTaskName = item.name;
      $scope.newTaskDate = item.date;
      $scope.newTaskCompleted = item.completed;
      console.log($scope);
    };

    $scope.saveTask = function () {
      const id = +$routeParams.id;

      const index = tasks.findIndex(function (value) {
        return value.id === id;
      });

      const item = tasks.find(function (value) {
        return value.id === id;
      });

      item.name = this.newTaskName;
      item.date = this.newTaskDate;
      item.completed = this.newTaskCompleted;

      $scope.tasks[index] = item;

      $location.path('/edit');
    };
  }
});