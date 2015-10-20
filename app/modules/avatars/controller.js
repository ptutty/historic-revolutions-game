(function(){
 	var app = angular.module('revolutions-avatars', []);
 	
	// assign avatar
	app.controller('avatarController', function($scope, $routeParams, $filter, $http, gameState) {

		$scope.gameState = gameState;
		$scope.gameState.role = $routeParams.role;
		var ctrlScope = $scope;

		//user settings based on level and revolutionary or ruler
		if (gameState.role == 'revolutionary' && gameState.level == '1'){
			setAvatar(1, 12, 150); //lenin
		}
		if (gameState.role == 'ruler' && gameState.level == '1'){
			setAvatar(2, 12, 115); // Deng
		};
		if (gameState.role == 'revolutionary' && gameState.level == '2'){
			setAvatar(3, 10, 130); // zapata
		};
		if (gameState.role == 'ruler' && gameState.level == '2'){
			setAvatar(4, 10, 90); // charles 1
		};
		if (gameState.role == 'revolutionary' && gameState.level == '3'){
			setAvatar(5, 8, 110); // spartacus
		};
		if (gameState.role == 'ruler' && gameState.level == '3'){
			setAvatar(6, 8, 70); // louis XVI
		};


		// Arguments: avatarID /  max factors to play / tipping point divided by 10  
		function setAvatar(avatarID, numFactors, tippingPoint){
			gameState.numFactors = numFactors;
			// get the avatar details from the loaded JSON by filtering by ID and add to the User service.
			$http.get('app/json/avatars.json').success(function(data){
					gameState.avatarDetails = $filter('filter')(data, {id: avatarID })[0];
					gameState.tippingPoint = tippingPoint;
					gameState.fireIncrements = tippingPoint / 10;
					ctrlScope.bkgrd = "bkgrd-" + gameState.avatarDetails.id;
			});

		
		}


 	});

})();