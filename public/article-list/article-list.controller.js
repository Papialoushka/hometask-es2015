angular.module('articleList').controller('articleListController', function ($scope, $state) {
  $scope.articles = [];
  $scope.articleName = '';
  $scope.articleContent = '';
  $scope.reverse = true;

  $scope.getCount = () => $scope.articles.length;

  $scope.addArticle = () => {
    console.log($scope.articles);
    let articleName = $scope.articleName;
    let articleContent = $scope.articleContent;

    if (articleName && $scope.articles.indexOf(articleName) == -1) {
      $scope.article = {
        name: articleName,
        content: articleContent,
        date: Date.now(),
        id: Date.now(),
        edit: false
      };

      $scope.articles.push($scope.article);
    }
    console.log($scope.articles);
  };

  $scope.removeArticle = (index) => $scope.articles.splice(index, 1);

  $scope.toggleEditMode = function () {
    const id = $state.params.articleId;
    const item = $scope.articles.find((value) => value.id === id);
    $scope.articles.newArticleName = item.name;
    $scope.articles.newArticleDate = item.date;
  };

  $scope.saveArticle = function () {
    const id = $state.params.articleId;

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
});