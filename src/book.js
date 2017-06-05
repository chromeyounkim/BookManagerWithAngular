(function() {
  var app = angular.module('bookManagerApp', []);
  app.controller('bookManagerController', ['$scope', function($scope) {
    $scope.books = [
      {title:"AngularJS",author:"Brad Green",cost:20},
      {title:"Head First EJB",author:"Kathy Sierra",cost:25},
      {title:"Professional Website Performance",author:"Peter Smith",cost:10}
    ];
    $scope.book = {};
    $scope.addBook = function(book) {
      $scope.books.push(book);
      $scope.book = {};
    }
    
    $scope.editBook = function(index) {
      $scope.indexId = index;
      $scope.book = $scope.books[index];
    }
    
    $scope.updateBook = function(book) {
      $scope.books[$scope.editId] = book;
      $scope.editId = undefined;
      $scope.book = {};
    }
    
    $scope.deleteBook = function(index) {
      $scope.books.splice(index, 1);
    }
    
  }]);

})();