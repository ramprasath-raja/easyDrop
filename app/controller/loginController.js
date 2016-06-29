app.controller('loginCtrl', function ($scope, userService){
	var login = this;
	login.user = {};
	login.login = function() {
		if(login.user.username && login.user.password){
			userService.login({user : login.user}, function(data){
				if(data && data.auth_key){
					localStorage.setItem("token", data.auth_key);
		    	window.location.href = window.location.protocol+"//"+window.location.host + '/#/manage';
				}
				else{
					alert("login failed")
					console.log("login failed");
				}				
	    });
		}
	}
})
