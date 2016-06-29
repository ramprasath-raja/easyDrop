app.controller('mainCtrl', function ($scope) {
	var managingObj=this;
	$scope.manages=[
				{sourceLink:"#/portalUser",manageImage:"content/images/user.png",heading:"Manage Portal Users",content:"You can add users that will operate this portal. If a user needs to use the mobile app, you will need to setup that user as a driver"},
				{sourceLink:"#/driver",manageImage:"content/images/van.png",heading:"Manage Drivers",content:"Use this page to add drivers that will use the mobile app. This is the starting point. Once the drivers are added please go to Manage Deliveries and start recording the deliveries."},
				{sourceLink:"#/delivery",manageImage:"content/images/delivery.png",heading:"Manage Deliveries",content:"This screen allows you to add, edit and view deliveries. Once deliveries are recorded and allocated to drivers, please go to Driver Tracking to track your drivers."},
				{sourceLink:"#/runs",manageImage:"content/images/run.png",heading:"Manage Runs",content:"Use this screen to allocate drivers to runs. When entering deliveries through the Manage Deliveries screen you have the option of entering Run information. "},
				{sourceLink:"#/mapDriverTracking",manageImage:"content/images/map.png",heading:"Manage Driver Tracking",content:"Use this screen to track your drivers and the deliveries executed. You can also view the POD document for each delivery."}
				];			
});
