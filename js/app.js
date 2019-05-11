// Tworzymy moduł aplikacji
var myApp = angular.module('userApp', ["xeditable"]);

myApp.run(function(editableOptions) {
   editableOptions.theme = 'bs3';
 });
 
 myApp.controller('Ctrl', function($scope) {
   $scope.user2 = {
     name: 'awesome usr'
   };
 });

// Tworzymy kotroler UserCtrl
myApp.controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {

   // tworzymy model
   $scope.users = [];
   $scope.newUser = {};

   // zasilamy danymi z pliku JSON  
   $http.get('users.json').success(function (data) {
      $scope.users = data;
      _setIndexes();
   });
   $scope.addUser = function () {
      var newUser = $scope.newUser;
      newUser.state = "normal";
      newUser.index = $scope.users.length;
      newUser.javaScript=0;
      newUser.jQuery=0;
      newUser.PHP=0;
      $scope.users.push(newUser);
      $scope.newUser = {};      
   };

   $scope.deleteUser = function (user) {
         $scope.users.splice(user.index, 1);
         _setIndexes();
   };

   

   // metody prywatne
   function _setIndexes() {
      $scope.users.forEach(function (user, index) {
         user.index = index;
      });
   }
}]);
