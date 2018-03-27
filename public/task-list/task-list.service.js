angular.module('taskList').service('SharedData', function (InitialTasks, $location, $routeParams) {
  const createTasks = {
    tasks: InitialTasks.query(),
    taskToDo: '',
    reverse: true,
    getToDoCount: function () {
      return this.tasks.length;
    },
    removeTask: function (index) {
      return this.tasks.splice(index, 1);
    },
    filterFunction: function (element) {
      return element.name.match(/^[Ma]/) ? true : false;
    }
  };
  return createTasks;
});