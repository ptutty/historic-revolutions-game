(function(){
	// module: factors 
	var app = angular.module('revolutions-factors', []);

	app.directive('factorsPanel', ['$http' , function($http){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/factors/views/factors-panel.html',
			controller: function(gameState){
				var factorsPanel = this;
				factorsPanel.gameState = gameState;
				factorsPanel.factorsList = [];

				// service for factors list
				$http.get('app/json/list_of_factors.json').success(function(data){
					factorsPanel.factorsList = data;
				});



				factorsPanel.currentFactorUpdate = function(factor) {
				    	factorsPanel.currentFactor = angular.fromJson(factor);
				};

				factorsPanel.currentFactorWeightUpdate = function(selected) {
					if (factorsPanel.gameState.role == 'revolutionary' ) {
						factorsPanel.currentFactor.weight = selected;
					} else { // i.e. ruler
						if (selected == 1 ) {
							factorsPanel.currentFactor.weight = 5;
						} else {
							factorsPanel.currentFactor.weight = 1;
						}
					}
					factorsPanel.useFactor();
				};

				factorsPanel.useFactor = function() {
					if (factorsPanel.gameState.factorsUsed < factorsPanel.gameState.numFactors) {
						factorsPanel.currentFactor.used = true;
						var factorScore = factorsPanel.currentFactor.IR * factorsPanel.currentFactor.weight;
						factorsPanel.gameState.score += factorScore;
						factorsPanel.gameState.factorsUsed ++;
						factorsPanel.currentFactor.score = factorScore;
						factorsPanel.gameState.factors.push(factorsPanel.currentFactor);
					}
				}
				

				//helper function for number to array
				factorsPanel.getNumber = function(num) {
    				return (new Array(num));
				}

				factorsPanel.range = function(count) {
				    return Array.apply(0, Array(+count)).map(function(value,index){
				    return index;
					});
				}

			

			},
			controllerAs: 'factorsCtrl'
		}
	}]);


	

})();