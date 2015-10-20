

(function(){
	// module and directive for factors 
	var app = angular.module('revolutions-topnav', []);

	app.directive('topPanel', ['$http' , function($http, $location){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/topnav/views/top-panel.html',
			controller: function(gameState){
					var topPanel = this;
					topPanel.gameState = gameState;
					topPanel.factorsButton = false;
					topPanel.factorsButtonText = "Show factors";

					topPanel.showFactors = function(){

						if (!topPanel.factorsButton) {
							topPanel.factorsButtonText = "Hide factors";
							topPanel.gameState.factorPanel = true;
						} else {
							topPanel.factorsButtonText = "Show factors";
							topPanel.gameState.factorPanel = false;
						}
						topPanel.factorsButton = !topPanel.factorsButton;
					};


			},
			controllerAs: 'topPanelCtrl'
		}
	}]);
	

})();