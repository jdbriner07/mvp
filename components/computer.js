// basically a player
//only goes on in the background
//rng to determine actions
//displayed as an ammo count and label on screen
angular.module('007')
.directive('computerPlayer', function() {
	return {
		scope: {
			ammo: '<',
			action:'<'
		},
		controllerAs: 'ctrl',
		bindToController: true,
		controller: ['$scope', function($scope) {
			// $scope.ctrl.alive = true; think these are obsolete
			// $scope.ctrl.shielded = false;
			// $scope.ctrl.ammo = 1;
		// 	$scope.ctrl.reload = function() {
		// 		$scope.ctrl.ammo++;
		// 	};
		// 	$scope.ctrl.shield = function(){
		// 		$scope.ctrl.Shielded = true;
		// 	};
		// 	$scope.ctrl.unShield = function(){
		// 		$scope.ctrl.Shielded = false;
		// 	};
		}],
		template: `
	<div>Computer: {{ctrl.ammo}}</div>
	<div>Last Action: {{ctrl.action}}</div>
	`
	}
})