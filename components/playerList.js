angular.module('007', [])
.directive('playerList', function() {
	return {
		template: `
		<h1>Can you beat 007?!</h1>
    	<computer-player></computer-player>
    	<div ng-app="007">
   		<main-player></main-player>
		`
	}
})