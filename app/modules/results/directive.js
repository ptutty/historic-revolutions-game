(function(){
	// module and directive results
	var app = angular.module('revolutions-results', []);


	app.directive('resultsPanel', ['$http', function($http, $scope){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/results/views/results-panel.html',
			controller: function(gameState, $scope){

				var resultsPanel = this;
				resultsPanel.gameState = gameState;



				$scope.$watch(function(){
		            return resultsPanel.gameState.win;
		        }, function (win) {
		        	// successful revolutionary
		        	if (win && resultsPanel.gameState.role == 'revolutionary') {
						resultsPanel.resultType = 1;
					};

					//failed revolutionary
					if (!win && resultsPanel.gameState.role == 'revolutionary') {
						resultsPanel.resultType = 2;
					};

					//successful ruler
					if (win && resultsPanel.gameState.role == 'ruler') {
						resultsPanel.resultType = 3;
					};

					//failed ruler
					if (!win && resultsPanel.gameState.role == 'ruler') {
						resultsPanel.resultType = 4;
					};

					// level progression and game completion
					if (!win) {
								resultsPanel.completed =  1; // level not completed
								
						} else {

							if ( resultsPanel.gameState.level < 3) {
								resultsPanel.completed =  2; // level completed
								resultsPanel.nextlevel = resultsPanel.gameState.level;
								resultsPanel.nextlevel++;
							} else {
								resultsPanel.completed =  3; // game completed
							}
					}
					resultsPanel.bkgrdImg = "end-bkgrd-" + resultsPanel.resultType;
		        });		

			},
			controllerAs: 'resultsCtrl'
		}
	}]);


	

})();