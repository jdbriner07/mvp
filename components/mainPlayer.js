// player will have 3 properties
	// sheilded this turn: boolean
	//Alive: boolean starts true
	//ammon: # >= 0
//player will have 3 methods 
	//shot: attempt to move computer alive property to false
	//reload: increment up ammo property
	//sheild: prevent alive from becoming false this round 
angular.module('007')
.directive('mainPlayer', function() {
	return {
		scope: {
			reload: '<',
			ammo: '<',
			shield: '<',
			shot: '<'
		},
		restrict: 'E',
		replace: true,
		controllerAs: 'ctrl',
		bindToController: true,
		controller: ['$scope', function($scope) {
			// $scope.ctrl.alive = true; think these are obsolete
			// $scope.ctrl.shielded = false;
			// $scope.ctrl.reload = $scope.reload.bind($scope);
			// $scope.ctrl.reload = function() {
			// 	$.post('/reload', function(data) {
			// 		//need to recieve ammo count from the server and update variable
			// 		$scope.ctrl.ammo = data[0].ammo;
			// 		console.log(data);
			// 	})
			// 	//$scope.ctrl.ammo++;
			// };
			// $scope.ctrl.shield = function(){
			// 	$.post('/shield', function(data) {
			// 	})
			// 	//$scope.ctrl.Shielded = true;
			// };
		}],
		template: `
	<div>
	<p>ammo: {{ctrl.ammo}}</p>
	<ul> 
      <h2>actions</h2>
        <li ng-click="ctrl.shot()">Shoot</li>
        <li ng-click="ctrl.shield()">Shield</li>
        <li ng-click="ctrl.reload()">Reload</li>
    </ul>
    </div>`
	}
});