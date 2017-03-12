angular.module('007', [])
.directive('playerList', function() {
	return {
		scope: {},
		controllerAs: 'ctrl',
		bindToController: true,
		controller: ['$scope', '$http', function($scope, $http) { 
			$scope.ctrl.playerAmmo = 1;
			$scope.ctrl.comAmmo = 1;
			$scope.ctrl.comAction = "Vodka Martitni, shaken; Not stirred"
			$scope.ctrl.newGame = function() {
				$scope.ctrl.win = false;
				$scope.ctrl.tie = false;
				$scope.ctrl.lose = false;
			}
			$scope.ctrl.reload = function() {
				$http.post('/reload')
				.then(function(res) {
					if (!Array.isArray(res.data)) {
						$scope.ctrl[res.data] = true;
					}
					$scope.ctrl.playerAmmo = res.data[0].ammo;
					$scope.ctrl.comAmmo = res.data[1].ammo;
					$scope.ctrl.comAction = res.data[1].action;
				})
			};
			$scope.ctrl.shield = function(){
				$http.post('/shield')
				.then(function(res) {
					if (!Array.isArray(res.data)) {
						console.log(res.data)
						$scope.ctrl[res.data] = true;
					}
					$scope.ctrl.comAmmo = res.data[1].ammo;
					$scope.ctrl.comAction = res.data[1].action;
				})
				//$scope.ctrl.Shielded = true;
			};
			$scope.ctrl.shot = function() {
				if ($scope.ctrl.playerAmmo > 0) {
					$http.post('/shot')
					.then(function(res) {
						if (!Array.isArray(res.data)) {
							$scope.ctrl[res.data] = true;
						}
						$scope.ctrl.playerAmmo = res.data[0].ammo;
						$scope.ctrl.comAmmo = res.data[1].ammo;
						$scope.ctrl.comAction = res.data[1].action;
					})
				} else {
					$scope.ctrl.playerAmmo = 'You\'re out of ammo!!!! you need to reload!'
				}
			}
		}],
		template: `
		<div>
	   		<div ng-if="ctrl.win">
				<h1>You Beat 007! You are the new 007!</h1>
	   			<a onClick="ctrl.newGame" href="/">New Game</a>
	   		</div>
	   		<div ng-if="ctrl.lose">
    			<h1>007 reigns supreme!</h1>
    			<a onClick="ctrl.newGame" href="/">New Game</a>
  			</div>
  			<div ng-if="ctrl.tie">
    			<h1>You have slain the great 007! but you have died in the attempt!</h1>
    			<a onClick="ctrl.newGame" href="/">New Game</a>
  			</div>
			<div ng-if="!ctrl.tie && !ctrl.win && !ctrl.lose">
				<h1>Can you beat 007?!</h1>
	    		<computer-player ammo="ctrl.comAmmo" action="ctrl.comAction"></computer-player>
	    		<div ng-app="007">	
	   			<main-player ammo="ctrl.playerAmmo" reload="ctrl.reload" shield="ctrl.shield" shot="ctrl.shot"></main-player>
	   		</div>
	   	</div>
		`
	}
})