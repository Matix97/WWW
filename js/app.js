// Tworzymy moduł aplikacji
var myApp = angular.module('userApp', ["xeditable"]);

myApp.run(function(editableOptions) {
   editableOptions.theme = 'bs3';
   //userCount=user.javaScript+user.jQuery+user.PHP;
 });
 

// Tworzymy kotroler UserCtrl
myApp.controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {

   // tworzymy model
   $scope.users = [];
   $scope.newUser = {};

   $scope.getUserCount = function(user){
      //const total = Number(0);
     
      //const total=Number(user.PHP)+Number(user.javaScript)+Number(user.jQuery);
      //console.log("PHP: "+user.PHP+" total: "+Number(total));
         //total=6;
      return Number(user.PHP)+Number(user.javaScript)+Number(user.jQuery);
  }
  $scope.AddNumbers = function(user) {
   var c = Number(user.PHP || 0);
   var a = Number(user.javaScript || 0);
   var b =Number(user.jQuery || 0);
   console.log("a: "+a+" b: "+b+ " c: "+c);
   $scope.sum = a+b+c;
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
      newUser.javaScript=0;
      newUser.jQuery=0;
      newUser.PHP=0;
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
