angular.module('taskList').component('taskList', {
  templateUrl: 'task-list/task-list.html',
  controller: function ($scope, InitialTasks, $routeParams, $location) {
    $scope.tasks = InitialTasks.query();
    $scope.taskToDo = '';
    $scope.reverse = true;
    const taskListCtrl = this;

    $scope.getToDoCount = () => $scope.tasks.length;

    $scope.addTask = () => {
      let taskToDo = $scope.taskToDo;

      if (taskToDo && $scope.tasks.indexOf(taskToDo) == -1) {
        $scope.tasks.push({name: taskToDo, completed: false, date: Date.now()});
        $scope.taskToDo = '';
      }

      console.log($scope.tasks);
    };

    $scope.removeTask = (index) => $scope.tasks.splice(index, 1);

    $scope.sortBy = (propertyName) => {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

    $scope.filterFunction = function(element) {
      return element.name.match(/^[Ma]/) ? true : false;
    };

    $scope.editTask = (index) => {
      $scope.task = $scope.tasks[index].task;
      $scope.editIndex = index;
    };

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

      const index = $scope.tasks.findIndex(function (value) {
        return value.id === id;
      });

      const item = $scope.tasks.find(function (value) {
        return value.id === id;
      });

      item.name = this.newTaskName;
      item.date = this.newTaskDate;
      item.completed = this.newTaskCompleted;

      $scope.tasks[index] = item;

      $location.path('/');
    };
  }
});