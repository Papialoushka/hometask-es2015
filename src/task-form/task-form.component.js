angular.module('taskForm').component('taskForm', {
  template: `<span class="error-message" ng-show="taskCreate.taskName.$touched && taskCreate.taskName.$invalid">The task name is required. It should be at least 20 symbols long</span>
        <form name="taskCreate">
            <label for="taskName">Please enter your next task
                <input type="text" id="taskName" name="taskName" ng-model="taskToDo" ng-minlength="20" required autofocus>
            </label>
            <label for="submitTask">
                <input type="button" id="submitTask" value="Add" ng-click="addTask()">
            </label>
        </form>`,
  controller: function ($scope) {
    $scope.tasks = [];
    $scope.taskToDo = '';

    $scope.addTask = () => {
      let taskToDo = $scope.taskToDo;

      if (taskToDo && $scope.tasks.indexOf(taskToDo) == -1) {
        $scope.tasks.push({name: taskToDo, completed: false, date: Date.now()});
        $scope.taskToDo = '';
      }
    };
  }
});