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

   $scope.countColumn = function (nameOfCol) {
      switch (nameOfCol) {
         case 'javaScript':
            console.log(nameOfCol);
            // const total;
            // users.forEach(user => {
            //    total+=Number(user.nameOfCol);
            // });
            return 2;

         case 'jQuery':
            console.log(nameOfCol);
            return 1;

         case 'PHP':
            console.log(nameOfCol);
            return 1;
         case 'javaScript2':
            const total;
            users.forEach(user => {
               total += Number(user.javaScript);
            });
            return Number(total);
         case 'jQuery2':
            const total;
            users.forEach(user => {
               total += Number(user.jQuery);
            });
            return Number(total);
         case 'PHP2':   
            const total;
            users.forEach(user => {
               total += Number(user.PHP);
            });
            return Number(total);

      }
   }

   $scope.getUserCount = function (user) {
      countColumn('javaScript2');
      countColumn('jQuery2');
      countColumn('PHP2');
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
