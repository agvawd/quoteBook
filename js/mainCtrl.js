var app = angular.module("quoteBook");

app.controller('mainController', function($scope, mainService){
	$scope.quotes = mainService.getData();
	
});