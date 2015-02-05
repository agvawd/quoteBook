var app = angular.module("quoteBook");

app.controller('mainController', function($scope, mainService){
	$scope.quotes = mainService.getData();
	
	$scope.addQuote = function() {
		var quoteObj = {};
		quoteObj.text = $scope.inspire;
		quoteObj.author = $scope.authorofInspiration;
		mainService.addData(quoteObj);
		$scope.inspire = '';
		$scope.authorofInspiration = '';
	};

	$scope.removeQuote = function() {
		mainService.removeData($scope.searchTerm);
		$scope.searchTerm = '';
	};
});