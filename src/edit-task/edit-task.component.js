angular.module('editTask').component('editTask', {
  templateUrl: 'edit-task/edit-task.html',
  controller: function ($scope) {
    $scope.tasks = [];
    $scope.taskToDo = '';
    $scope.reverse = true;

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
  }
});