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
      if (!isNaN())
         for (var i = 0; i < users.length; i++) {
            if (isNaN(users[i].javaScript)) users[i].javaScript = 0;
            if (isNaN(users[i].jQuery)) users[i].jQuery = 0;
            if (isNaN(users[i].PHP)) users[i].PHP = 0;
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
               if (isNaN(users[i].javaScript)) users[i].javaScript = 0;
               total += Number(users[i].javaScript)
            }
            return total;

         case 'jQuery':
            var total = 0;
            for (var i = 0; i < users.length; i++) {
               if (isNaN(users[i].jQuery)) users[i].jQuery = 0;
               total += Number(users[i].jQuery)
            }
            return total;

         case 'PHP':
            var total = 0;
            for (var i = 0; i < users.length; i++) {
               if (isNaN(users[i].PHP)) users[i].PHP = 0;
               total += Number(users[i].PHP)
            }
            return total;


      }
   }

   $scope.getUserCount = function (user) {
      if (isNaN(user.javaScript)) user.javaScript = 0;
      if (isNaN(user.jQuery)) user.jQuery = 0;
      if (isNaN(user.PHP)) user.PHP = 0;
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
