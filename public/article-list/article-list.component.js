angular.module('articleList').component('articleList', {
  controller: function ($scope, $state) {
    $scope.articles = [];
    $scope.article = {};
    $scope.article.name = '';
    $scope.article.content = '';
    $scope.reverse = true;

    $scope.getCount = function () {
      return this.articles.length;
    };

    $scope.addArticle = () => {
      let articleName = $scope.article.name;
      let articleContent = $scope.article.content;

      if (articleName && $scope.articles.indexOf(articleName) == -1) {
        $scope.article = {
          name: articleName,
          content: articleContent,
          date: Date.now(),
          id: Date.now(),
          edit: false
        };
        $scope.articles.push($scope.article);
        $scope.article.name = '';
      }
    };

    $scope.removeArticle = (index) => $scope.articles.splice(index, 1);

    $scope.toggleEditMode = function () {
      const id = $state.params.taskId;
      const item = $scope.articles.find((value) => value.id === id);
      $scope.articles.newArticleName = item.name;
      $scope.articles.newArticleDate = item.date;
    };

    $scope.saveTask = function () {
      const id = $state.params.taskId;

      const index = $scope.articles.findIndex(function (value) {
        return value.id === id;
      });

      const item = $scope.articles.find(function (value) {
        return value.id === id;
      });

      item.name = this.newArticleName;
      item.date = this.newArticleDate;

      $scope.articles[index] = item;
    };

    $scope.sortBy = (propertyName) => {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

    $scope.filterFunction = (article) => article.name.match(/^[Ma]/) ? true : false;
  }
});