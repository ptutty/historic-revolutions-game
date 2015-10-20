(function(){
	// module and directive for stage and bonfire
	var app = angular.module('revolutions-stage', []);

	var bonfireImages  = []

	app.directive('stagePanel', ['$http', function($http, $scope){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/stage/views/stage-panel.html',
			controller: function(gameState, $scope){

			
				var stagePanel = this;
				stagePanel.gameState = gameState;
				stagePanel.gameState.gamebegin = true;

				var fireArray = fireIncrementsFactory(stagePanel.gameState.fireIncrements); //see helper.js
				var file_index;  
				var revolutionStarts = "fire-big.gif";
				var revolutionOver = "smoke.gif";

				$scope.$watch(function(){
		            return stagePanel.gameState.win
		        }, function (win) {
		        	if (win) {
		        		stagePanel.gameState.userScore = stagePanel.gameState.userScore + ((stagePanel.gameState.numFactors - stagePanel.gameState.factorsUsed) * 97);
		        	};
		        });


				$scope.$watch(function(){
		            return stagePanel.gameState.gameover
		        }, function (gameover) {


		        	if ( stagePanel.gameState.role == "revolutionary" ){
						
						if (gameover){
						 if (stagePanel.gameState.win){
						 	message = "You started a revolution well done!";
						 } else {
						 	message = "You failed to start a revolution";
						 }
						} else {
							message = "Can you start a revolution?";
						}

					} else if ( stagePanel.gameState.role == "ruler" ){ // ruler
						
						if (gameover){
						 if (stagePanel.gameState.win){
						 	message = "You successfully quelled the revolution";
						 } else {
						 	message = "You failed to quell the revolution";
						 }
						} else {
							message = "You need to quell the 'fires' of revolution";
						}
					}
					stagePanel.finalMessage = message;
		        });


				
				

				$scope.setBkgrd = function() {
					return "bkgrd-" + stagePanel.gameState.avatarDetails.id;
				}


				

				if ( stagePanel.gameState.role == "revolutionary" ){
					file_index = [1,2,3,4,5,6,7,8,9,10];
					gameEndWin =  revolutionStarts;
					gameEndLose =  revolutionOver; 
				} else if ( stagePanel.gameState.role == "ruler" ){ // ruler
					file_index = [10,9,8,7,6,5,4,3,2,1];
					gameEndWin =  revolutionOver; 
					gameEndLose =  revolutionStarts;
				}

				
				$scope.$watch(function(){
		            return stagePanel.gameState.score
		        }, function (heat) {
			            
			        	if (heat == fireArray[0]) {
						    stagePanel.fireIncrement =  "fire-" + file_index[0] + ".gif";
						};
						if (heat >  fireArray[0] && heat < fireArray[1] ) {
						    stagePanel.fireIncrement = "fire-" + file_index[1] + ".gif";
						}; 
						if (heat > fireArray[1] && heat < fireArray[2] ) {
						     stagePanel.fireIncrement = "fire-" + file_index[2] + ".gif";
						};
						if (heat > fireArray[2] && heat < fireArray[3] ) {
						    stagePanel.fireIncrement = "fire-" + file_index[3] + ".gif";
						};
						if (heat > fireArray[3] && heat < fireArray[4] ) {
						    stagePanel.fireIncrement = "fire-" + file_index[4] + ".gif";
						};
						if (heat > fireArray[4] && heat < fireArray[5] ) {
						    stagePanel.fireIncrement = "fire-" + file_index[5] + ".gif";
						};
						if (heat > fireArray[5] && heat < fireArray[6] ) {
						    stagePanel.fireIncrement = "fire-" + file_index[6] + ".gif";
						};
						if (heat > fireArray[6] && heat < fireArray[7] ) {
						    stagePanel.fireIncrement = "fire-" + file_index[7] + ".gif";
						};
						if (heat > fireArray[7] && heat < fireArray[8] ) {
						    stagePanel.fireIncrement = "fire-" + file_index[8] + ".gif";
						};
						if (heat > fireArray[8] && heat < fireArray[9] ) {
						    stagePanel.fireIncrement = "fire-" + file_index[9] + ".gif";
						};

						// win
						if (heat > fireArray[10] ) { 
							stagePanel.gameState.gameover = true;
							stagePanel.gameState.win = true;	
							stagePanel.fireIncrement = gameEndWin; 
						};

						// lose
						if (stagePanel.gameState.factorsUsed == stagePanel.gameState.numFactors) {
							stagePanel.gameState.gameover = true;
							stagePanel.gameState.win = false;
							stagePanel.fireIncrement = gameEndLose; 
						};
		        });
			},
			controllerAs: 'stageCtrl'
		}
	}]);


	

})();