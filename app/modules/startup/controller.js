(function(){
 	var app = angular.module('revolutions-startup', []);

 	// new game route is invoked
	app.controller('welcomeController', function($scope, $routeParams, gameState) {
		gameState.init();
	});


	app.controller('levelController', function($scope, gameState, $routeParams) {
		gameState.nextLevel();
		$scope.gameState = gameState;
		$scope.gameState.level = $routeParams.num;
	});

	app.controller('roleController', function($scope, gameState, $routeParams) {
		$scope.gameState = gameState;
	});


})();