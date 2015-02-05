var app = angular.module("quoteBook");

app.controller('mainController', function($scope, mainService, $cookieStore){
	$scope.quotes = mainService.getData();
	$cookieStore.put("data", $scope.quotes);

	$scope.addQuote = function() {
		var quoteObj = {};
		quoteObj.text = $scope.inspire;
		quoteObj.author = $scope.authorofInspiration;
		//mainService.addData(quoteObj);
		
		$scope.quotes.push(quoteObj);
		$cookieStore.put("data", $scope.quotes);
		
		$scope.inspire = '';
		$scope.authorofInspiration = '';
	};

	$scope.removeQuote = function() {
		for(var i = 0; i < $scope.quotes.length; i++) {
	  		if($scope.quotes[i].text.toUpperCase().indexOf($scope.searchTerm.toUpperCase()) !== -1){
	  			$scope.quotes.splice(i, 1);
	        i--;
	      }
	      else if($scope.quotes[i].author.toUpperCase().indexOf($scope.searchTerm.toUpperCase()) !== -1){
	        $scope.quotes.splice(i, 1);
	        i--;
	      }
	  	}

		$cookieStore.put("data", $scope.quotes);

		//mainService.removeData($scope.searchTerm);
		$scope.searchTerm = '';
	};
});