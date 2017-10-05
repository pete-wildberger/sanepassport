// AngularJS app
angular.module('myApp', ["ngRoute"]);
angular.module('myApp').config(router);
router.$inject = ['$routeProvider', '$locationProvider'];
function router($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/partials/welcome.html',
      controller: 'IndexController as ic',
      controllerAs: 'ic'
    });
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
}
