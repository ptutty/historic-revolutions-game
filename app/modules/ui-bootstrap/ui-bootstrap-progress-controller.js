(function(){

  var app = angular.module('ui.bootstrap');

    app.controller('ProgressCtrl', function ($scope, gameState) {
    
        $scope.type = 'success';
        $scope.gameState = gameState;

        if ($scope.gameState.role == 'revolutionary' ) {
                $scope.message = 'Add factors which cause a revolution';
            } else { // i.e. ruler
                $scope.message = 'Add factors which mitigate a revolution';
        }
          
        $scope.$watch(function(){
            return $scope.gameState.factorsUsed;
        }, function (newValue) {
            $scope.factorsRemaining = $scope.gameState.numFactors - newValue;
            if ($scope.factorsRemaining < 3 ){
                $scope.type = 'danger';
                $scope.message = 'You do not have many factors left - choose wisely!';
            }
        });


        $scope.$watch(function(){
            return $scope.gameState.score;
        }, function (newValue) {
            if ($scope.gameState.role == 'revolutionary' ) {
                $scope.score = newValue;
            } else { // i.e. ruler
                $scope.score =  $scope.gameState.tippingPoint - newValue;
            }
        });
    
    });



})();