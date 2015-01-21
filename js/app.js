var app = angular.module('quoteBook', []);

var cook = angular.module('cookiesExample', 
	['ngCookies'])
.controller('ExmpleController', [$cookies, function ($cookies) {
	var favoriteCookie = $cookies.myFavorite;
	$cookies.myFavorite = 'oatmeal';
}]);