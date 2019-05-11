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
      $scope.users.push(newUser);
      $scope.newUser = {};
   };

   $scope.deleteUser = function (user) {
      if (user.state == "deleted") {
         $scope.users.splice(user.index, 1);
         _setIndexes();
      } else {
         user.state = "deleted";
      }
   };

   // $scope.undoDelete = function (user) {
   //    user.state = "normal";
   // };
   $scope.editUser = function (user) {
      user.oldNazwiskoIImie = user.nazwiskoIImie;
      user.oldNr_indeksu = user.nr_indeksu;
      user.oldJavaScript = user.javaScript;
      user.oldJQuery = user.jQuery;
      user.oldPHP = user.PHP;
      user.state = "edit";
   };

   $scope.saveUser = function (user) {
      // tu możemy użyć Ajaxowego  POST do zapisu danych 
      user.state = "normal";
   };

   $scope.cancelEdit = function (user) {
      user.nazwiskoIImie = user.oldNazwiskoIImie;
      user.nr_indeksu = user.oldNr_indeksu;
      user.javaScript = user.oldJavaScript;
      user.jQuery = user.oldJQuery;
      user.PHP = user.oldPHP;
      user.state = "normal";
   };

   // metody prywatne
   function _setIndexes() {
      $scope.users.forEach(function (user, index) {
         user.index = index;
      });
   }
}]);
