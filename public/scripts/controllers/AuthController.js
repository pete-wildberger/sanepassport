angular.module('myApp').controller('AuthController', AuthController);

AuthController.$inject = ['$location', 'httpService', 'AuthFactory'];

function AuthController($location, httpService, AuthFactory) {
  console.log('AuthController');
  const vm = this;
  vm.login = function() {
    var userCredentials = {
      email: vm.email,
      password: vm.password
    }; //end of userCredentials
    httpService.postItem(userCredentials).then((res) => {
      vm.userData = res;
      if (vm.userData === 'Not in system') {
        alert('not in system');
      } else if (vm.userData.data === 'Unauthorized') {
        alert('unauthorized');
      } else {
          vm.go('/welcome');
      }
    }); //end of service
  }; //end of login
  vm.go = (path) => {
    console.log('donate');
    $location.path(path);
  };
}
