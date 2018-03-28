angular.module('manageArticleApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$provide',
  function config($stateProvider, $urlRouterProvider, $locationProvider, $provide) {
    $locationProvider.html5Mode(true); // enable html5Mode for pushstate ('#'-less URLs DOESN'T WORK)
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'article-list/article-list.html'
    }).state('edit', {
      url: '/edit/:articleId',
      templateUrl: 'article-list/edit-article.html'
    });
  }
]);