angular.module('articleList').controller('articleListController', function ($scope, $state, $rootScope) {
  $scope.articles = $rootScope.articles || [];
  $scope.articleName = '';
  $scope.articleContent = '';
  $scope.reverse = true;

  $scope.getCount = () => $scope.articles.length;

  $scope.addArticle = () => {
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
  };

  $scope.removeArticle = (index) => $scope.articles.splice(index, 1);

  $scope.toggleEditMode = function (index) {
    const item = $scope.articles[index];

    $scope.newArticleName = item.name;
    $scope.newArticleContent = item.content;
    $scope.newArticleDate = item.date;
    $rootScope.articles = this.articles;
  };

  $scope.saveArticle = function (index) {
    const id = +$state.params.articleId;

    const elem = $rootScope.articles.findIndex(function (value) {
      return value.id === id;
    });

    const item = $rootScope.articles.find(function (value) {
      return value.id === id;
    });

    item.name = $scope.newArticleName;
    item.content = $scope.newArticleContent;
    item.date = $scope.newArticleDate;

    $scope.articles[elem] = item;
  };

  $scope.sortBy = (propertyName) => {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

  $scope.filterFunction = (article) => article.name.match(/^[Ma]/) ? true : false;
});