var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $timeout) {
  $scope.save = function(){
    $scope.loading = true;
    $timeout(function(){
      $scope.loading = false;
      
    }, 3000);
  }; 
});