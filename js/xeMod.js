var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('Ctrl', function($scope) {
  $scope.user2 = {
    name: 'awesome usr'
  };
});