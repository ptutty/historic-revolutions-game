
(function(){


	var app = angular.module('appServices', [])

	// service to share user data between modules and controllers
	app.service('gameState', function() {

		// service variables needed for brand new game
		this.init = function(){
			this.factors = []; 
			this.role = "";
			this.level = 1;
			this.numFactors = 0;
			this.tippingPoint = 0;
			this.fireIncrements = 0;
			this.avatarDetails = {"id": 1, "name": ""};
			this.userScore = 0;
			this.factorPanel = true;
			this.win = false;
			this.factorsUsed = 0;
			this.gameover =  false;
			this.gamebegin = false;
			this.score = 0; 
		}

		// service variables that need resetting for each level
		this.nextLevel = function(){
			this.factorPanel = true;
			this.win = false;
			this.score = 0; 
			this.factorsUsed = 0;
			this.gameover =  false;
			this.gamebegin = false;
		}
	});
})();	
