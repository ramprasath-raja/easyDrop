app.controller('homeCtrl', function($scope, $window, $location){

	var home = this;
	home.locationUrl = $location;

	home.init = function() {
		// Check token in session
		console.log(localStorage.getItem("token"))
		if(!localStorage.getItem("token")){
			window.location.href = window.location.protocol+"//"+window.location.host + '/#/login';
		}
	}	
})
