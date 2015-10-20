(function(){

	var app = angular.module('revolutions-routes', []);

	// game routes
	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/welcome/', { // route to start a new game
	        templateUrl: 'app/modules/startup/views/welcome.html',
	        controller: 'welcomeController'
	      }).
	      when('/level/:num', { 
	        templateUrl: 'app/modules/startup/views/chooselevel.html',
	        controller: 'levelController'
	      }).
	      when('/level/:num/role/', { // level of difficulty
	        templateUrl: 'app/modules/startup/views/role.html',
	        controller: 'roleController'
	      }).
	      when('/level/:num/role/:role', { // show avatar given to user
	        templateUrl: 'app/modules/avatars/views/avatar.html',
	        controller: 'avatarController'
	      }).
	       when('/level/:num/role/:role/play', { // play game
	        templateUrl: 'app/partials/game.html',

	      }).
	      when('/level/:num/role/:role/results/', { // game results
	        templateUrl: 'app/partials/results.html'
	      }).
	      otherwise({
	        redirectTo: '/welcome/'
	      });
  	}]);

	
})();