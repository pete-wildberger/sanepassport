angular.module('myApp').controller('IndexController', IndexController);

IndexController.$inject=['$location', 'httpService', 'AuthFactory'];

function IndexController($location, httpService, AuthFactory) {
  console.log('IndexController');
  const vm = this;

  vm.go = function (path) {
    console.log('donate');
    $location.path(path);
  };
}
