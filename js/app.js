// Tworzymy moduł aplikacji
var myApp = angular.module('userApp', ["xeditable"]);

myApp.run(function (editableOptions) {
   editableOptions.theme = 'bs3';
});


// Tworzymy kotroler UserCtrl
myApp.controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {

   // tworzymy model
   $scope.users = [];
   $scope.newUser = {};

   $scope.countTotal = function (users) {
      var total = 0;
      for (var i = 0; i < users.length; i++) {
         total += Number(users[i].javaScript)
         total += Number(users[i].jQuery)
         total += Number(users[i].PHP)
      }
      return total;
   }
   $scope.countColumn = function (nameOfCol, users) {
      switch (nameOfCol) {
         case 'javaScript':
            var total = 0;
            for (var i = 0; i < users.length; i++) {
               total += Number(users[i].javaScript)
            }
            return total;

         case 'jQuery':
            var total = 0;
            for (var i = 0; i < users.length; i++) {
               total += Number(users[i].jQuery)
            }
            return total;

         case 'PHP':
            var total = 0;
            for (var i = 0; i < users.length; i++) {
               total += Number(users[i].PHP)
            }
            return total;


      }
   }

   $scope.getUserCount = function (user) {
      return Number(user.PHP) + Number(user.javaScript) + Number(user.jQuery);
   }

   // zasilamy danymi z pliku JSON  
   $http.get('users.json').success(function (data) {
      $scope.users = data;
      _setIndexes();
   });
   $scope.addUser = function () {
      var newUser = $scope.newUser;
      newUser.state = "normal";
      newUser.index = $scope.users.length;
      newUser.javaScript = 0;
      newUser.jQuery = 0;
      newUser.PHP = 0;
      $scope.users.push(newUser);
      $scope.newUser = {};
   };
   //  $scope.countForUser
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
