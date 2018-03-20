angular.module('taskList').component('taskList', {
  templateUrl: 'task-list/task-list.html',
  controller: function ($scope, InitialTasks) {
    $scope.tasks = InitialTasks.query();
    $scope.taskToDo = '';
    $scope.reverse = true;

    $scope.getToDoCount = () => $scope.tasks.length;

    $scope.addTask = () => {
      let taskToDo = $scope.taskToDo;

      if (taskToDo && $scope.tasks.indexOf(taskToDo) == -1) {
        $scope.tasks.push({name: taskToDo, completed: false, date: Date.now()});
        $scope.taskToDo = '';
      }
    };

    $scope.removeTask = (index) => $scope.tasks.splice(index, 1);

    $scope.sortBy = (propertyName) => {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

    $scope.filterFunction = function(element) {
      return element.name.match(/^[Ma]/) ? true : false;
    };
  }
});