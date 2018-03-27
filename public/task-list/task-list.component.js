angular.module('taskList').component('taskList', {
  templateUrl: 'task-list/task-list.html',
  controller: ['SharedData', '$scope', 'InitialTasks', '$routeParams', '$location', function (SharedData, $scope, InitialTasks, $routeParams, $location) {
    $scope.createTasks = SharedData;

    $scope.addTask = () => {
      let taskToDo = $scope.taskToDo;

      if (taskToDo && $scope.createTasks.tasks.indexOf(taskToDo) == -1) {
        $scope.createTasks.tasks.push({
          name: taskToDo,
          completed: false,
          date: Date.now(),
          id: Date.now(),
          edit: false
        });
        $scope.taskToDo = '';
      }
    };

    $scope.sortBy = (propertyName) => {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

    $scope.completeTask = function (index) {
      if ($scope.createTasks.tasks[index].completed === false) {
        Object.defineProperty($scope.createTasks.tasks[index], 'completed', {
          value: 'true',
          writable: true
        });
      } else {
        Object.defineProperty($scope.createTasks.tasks[index], 'completed', {
          value: 'false',
          writable: false
        });
      }
    };

    $scope.filterParameter = '';

    $scope.setFilterParameter = function (filterParameter) {
      $scope.filterParameter = filterParameter;
      console.log($scope.filterParameter);
    };

    $scope.filterByCompleted = function (filterParameter) {
      filterParameter = $scope.filterParameter;
      return function (item) {
        if (filterParameter === '') {
          return true;
        } else {
          return item.completed === filterParameter;
        }
      };
    };
  }
  ]
});