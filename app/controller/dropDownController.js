app.controller('DropdownCtrl', function($scope){
	var navdropDownObj=this;
	$scope.manageOptions=[
				{manageUserLink:"#/portalUser",choice:"Portal Users"},
				{manageUserLink:"#/driver",choice:"Drivers"},
				{manageUserLink:"#/delivery",choice:"Deliveries"},
				{manageUserLink:"#/runs",choice:"Runs"}
				];
	$scope.mapOptions=[
				{mapUserLink:"#/mapDriverTracking",choice:"Driver Tracking"}
				];
	$scope.reportOptions=[
				{reportUserLink:"#/deliveryHistory",choice:"Delivery History"}
				];
	$scope.settingsOptions=[
				{settingsUserLink:"#/companySettings",choice:"Company Settings"}
				];
	$scope.rightNavmenuOptions=[
				{manageUserLink:"#/editProfile",choice:"Edit Profile"},
				{manageUserLink:"#/login",choice:"Logout"},
				];
});