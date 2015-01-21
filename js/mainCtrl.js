var app = angular.module('quoteBook');

app.controller('MainCtrl', function ($scope, myService) {
	$scope.getQuotes = myService.getData();
	
	$scope.addNewQuote = function () {
		var object = {
			text: $scope.newQuote,
			author: $scope.newAuthor
		};
		myService.addData(object);

	};
	$scope.remove = function (key) {
		myService.removeData(key);
	};

// app.controller('ToggleController', function() {
// 	this.tab = 1;

// 	this.selectTab = function(setTab) {
// 		this.tab = setTab;
// 	}

// 	this.isSelected = function(checkTab) {
// 		return this.tab === checkTab;
// 	};
// });
	
// });