angular.module('myApp').controller('AuthController', AuthController);

AuthController.$inject=['$location', 'httpService', 'AuthFactory'];

function AuthController($location, httpService, AuthFactory) {
  console.log('AuthController');
  const vm = this;

  vm.go = function (path) {
    console.log('donate');
    $location.path(path);
  };
}
