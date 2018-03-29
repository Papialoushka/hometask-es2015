angular.module('manageArticleApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$provide',
  function config($stateProvider, $urlRouterProvider, $locationProvider, $provide) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'article-list/article-list.html',
      controller: 'articleListController'
    }).state('edit', {
      url: '/edit/:articleId',
      templateUrl: 'article-list/edit-article.html',
      controller: 'articleListController',
      resolve: {
        articleId: ['$stateParams', function ($stateParams) {
          return $stateParams.articleId;
        }]
      }
    });
  }
]);