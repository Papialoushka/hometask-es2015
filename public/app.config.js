angular.module('manageArticleApp').config(['$stateProvider', '$urlRouterProvider',
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

    // $routeProvider.when('/', {
    //   template: '<article-list></article-list>'
    // }).when('/edit/:taskId/', {
    //   template: '<edit-article></edit-article>'
    // }).otherwise('/');

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'article-list/article-list.html'
    }).state('edit', {
      url: '/edit/:articleId',
      templateUrl: 'article-list/edit-article.html'
    });
  }
]);