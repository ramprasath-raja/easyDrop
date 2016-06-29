var easydrop = angular.module('easydrop', ['ui.router','ngAnimate','ui.bootstrap']);
easydrop.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/home');
$stateProvider
// HOME  ========================================
		 .state('home', {
            url: '/home',
            templateUrl: 'home.html',
			controller:'homeCtrl'
        })
		
 // LOGIN  ========================================
		 .state('login', {
            url: '/login',
            templateUrl: 'login.html',
			controller:'homeCtrl'
        }) 
		 // MANAGE  ========================================
		 .state('manage', {
            url: '/manage',
            templateUrl: 'manage.html',
			controller:'MainController'
        }) 
		// PORTAL USER  ========================================
		 .state('portalUser', {
            url: '/portalUser',
            templateUrl: 'manage_portal_user.html',
			controller:'portalUserCtrl'
        })   
		// DRIVER  ========================================
		 .state('driver', {
            url: '/driver',
            templateUrl: 'manage_drivers.html',
			controller:'driverUserCtrl'
        }) 
		// DELIVERY  ========================================
		 .state('delivery', {
            url: '/delivery',
            templateUrl: 'manage_deliveries.html',
			controller:'homeCtrl'
        })
		// RUN  ========================================
		 .state('runs', {
            url: '/runs',
            templateUrl: 'manage_run.html',
			controller:'homeCtrl'
        }) 
		// MAP  ========================================
		 .state('mapDriverTracking', {
            url: '/mapDriverTracking',
            templateUrl: 'map-driver-tracking.html',
			controller:'driverTrackingCtrl'
        }) 
		// DELIVERY HISTORY  ========================================
		 .state('deliveryHistory', {
            url: '/deliveryHistory',
            templateUrl: 'report_delivery_history.html',
			controller:'homeCtrl'
        }) 
		// COMPANY SETTINGS  ========================================
		 .state('companySettings', {
            url: '/companySettings',
            templateUrl: 'Company_Settings.html',
			controller:'homeCtrl'
        })   
		// EDIT PROFILE  ========================================
		 .state('editProfile', {
            url: '/editProfile',
            templateUrl: 'Edit_Profile.html',
			controller:'homeCtrl'
        })
});


easydrop.controller('homeCtrl', function ($scope) {
});

easydrop.controller('portalUserCtrl', function ($scope) {
});
easydrop.controller('driverUserCtrl', function ($scope) {
});
//CarouselCtrl
easydrop.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'images/p01.png',
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }
});
//Home page Ctrl
easydrop.controller('MainController', function ($scope) {
var managingObj=this;
$scope.manages=[
			{sourceLink:"#/portalUser",manageImage:"images/user.png",heading:"Manage Portal Users",content:"You can add users that will operate this portal. If a user needs to use the mobile app, you will need to setup that user as a driver"},
			{sourceLink:"#/driver",manageImage:"images/van.png",heading:"Manage Drivers",content:"Use this page to add drivers that will use the mobile app. This is the starting point. Once the drivers are added please go to Manage Deliveries and start recording the deliveries."},
			{sourceLink:"#/delivery",manageImage:"images/delivery.png",heading:"Manage Deliveries",content:"This screen allows you to add, edit and view deliveries. Once deliveries are recorded and allocated to drivers, please go to Driver Tracking to track your drivers."},
			{sourceLink:"#/runs",manageImage:"images/run.png",heading:"Manage Runs",content:"Use this screen to allocate drivers to runs. When entering deliveries through the Manage Deliveries screen you have the option of entering Run information. "},
			{sourceLink:"map-driver-tracking.html",manageImage:"images/map.png",heading:"Manage Driver Tracking",content:"Use this screen to track your drivers and the deliveries executed. You can also view the POD document for each delivery."}
			];
			
});
//Home page Ctrl ends
//Nav Bar Drop Down Ctrl
easydrop.controller('DropdownCtrl', function ($scope) {
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
//Nav Bar Drop Down Ctrl Ends
//Add User PopUp Ctrl
easydrop.controller('addUserPopUpCtrl', function ($scope, $uibModal) {
  $scope.animationsEnabled = true;

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'addUserModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
 };
  $scope.open1 = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalCfghontent.html',
      controller: 'addUserModalInstanceCtrl',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

   
  };
  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

easydrop.controller('addUserModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  
});
//Add User PopUp Ctrl Ends
//portal user detail ctrl
easydrop.controller('portalUserDetailCtrl', function ($scope) {
var portalUserDetailObj=this;

$scope.portalUserDetails=[
					{userId:"info@delliv.com",userName:"Ricardo",Phone:"456789",userType:"Administrator",branch:"Vadapalani"},
					{userId:"info@delliv.com",userName:"Ricardo",Phone:"456789",userType:"Administrator",branch:"Vadapalani"},
					{userId:"info@delliv.com",userName:"Ricardo",Phone:"456789",userType:"Administrator",branch:"Vadapalani"}
					];
$scope.totalItems=54;
$scope.currentPage=6;
$scope.setPage=function(pageNo){
$scope.currentPage=pageNo;
};
$scope.pageChanged=function(){
$log.log('Page changed to:'+$scope.currentPage);
};
$scope.maxSize=5;
$scope.bigTotalItems=456;
$scope.bigCurrentItems=1;	
});
//portal user detail ctrl ends
//user Detail Ctrl
easydrop.controller('userDetailCtrl', function ($scope) {
var userDetailObj=this;

$scope.userDetails=[
					{deviceId:"1",nickName:"Abi",driverName:"dfgdg",yourRef:"sdgv",Phone:"456987",companyName:"erty",deviceType:"vadapalani",appName:"easydrop",OSVersion:"windows",appVersion:"1.3.4",branch:"vadapalani	"},
					{deviceId:"1",nickName:"Abi",driverName:"dfgdg",yourRef:"sdgv",Phone:"456987",companyName:"erty",deviceType:"vadapalani",appName:"easydrop",OSVersion:"windows",appVersion:"1.3.4",branch:"vadapalani	"},
					{deviceId:"1",nickName:"Abi",driverName:"dfgdg",yourRef:"sdgv",Phone:"456987",companyName:"erty",deviceType:"vadapalani",appName:"easydrop",OSVersion:"windows",appVersion:"1.3.4",branch:"vadapalani	"}
					];
$scope.totalItems=54;
$scope.currentPage=6;
$scope.setPage=function(pageNo){
$scope.currentPage=pageNo;
};
$scope.pageChanged=function(){
$log.log('Page changed to:'+$scope.currentPage);
};
$scope.maxSize=5;
$scope.bigTotalItems=456;
$scope.bigCurrentItems=1;	
});
//Add Driver PopUp Ctrl
easydrop.controller('addDriverPopUpCtrl', function ($scope, $uibModal) {
$scope.animationsEnabled = true;
$scope.open = function () {
	 var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'driverDetail.html',
      controller: 'addDriverModalInstanceCtrl',
      resolve: {
        items: function () {
          return;
        }
      }
    });
};
$scope.open1 = function () {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'filterDetail.html',
      controller: 'addDriverModalInstanceCtrl',
      resolve: {
        items: function () {
          return;
        }
      }
    });
};
$scope.toggleAnimation = function () {
$scope.animationsEnabled = !$scope.animationsEnabled;
  };
});

easydrop.controller('addDriverModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
$scope.ok = function () {
    $uibModalInstance.close();
  };
$scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
//Add Driver PopUp Ctrl Ends
easydrop.controller('filterDetailCtrl', function ($scope) {
var filterHeadingObj=this;

$scope.filterHeadings=[
					{filterLabel:"Device ID"},
					{filterLabel:"Nickname"},
					{filterLabel:"Driver Name"},
					{filterLabel:"Your Ref"},
					{filterLabel:"Phone"},
					{filterLabel:"Company Name"},
					{filterLabel:"Device Type"},
					{filterLabel:"App Name"},
					{filterLabel:"OS Version"},
					{filterLabel:"App Version"},
					{filterLabel:"Branch"}
					];
});
// Add Delivery Detail Ctrl
easydrop.controller('deliveryDetailCtrl', function ($scope, $log) {
var deliverDetailObj=this;

$scope.deliverDetails=[
					{runName:"nol",seq:"1",customerName:"456987",address1:"erty",city:"vadapalani",driverName:"John Brito",scheduleDate:"20/06/2016",
					status:"Open"},
					{runName:"bnoo",seq:"1",customerName:"456987",address1:"erty",city:"vadapalani",driverName:"John Brito",scheduleDate:"20/06/2016",
					status:"Deliver"},
					{runName:"mop",seq:"1",customerName:"456987",address1:"erty",city:"vadapalani",driverName:"John Brito",scheduleDate:"20/06/2016",
					status:"Open"}
					];

$scope.totalItems=54;
$scope.currentPage=6;
$scope.setPage=function(pageNo){
$scope.currentPage=pageNo;
};
$scope.pageChanged=function(){
$log.log('Page changed to:'+$scope.currentPage);
};
$scope.maxSize=5;
$scope.bigTotalItems=456;
$scope.bigCurrentItems=1;					
});

//Add Deliver PopUp Ctrl
easydrop.controller('addDeliverDetailPopUpCtrl', function ($scope, $uibModal) {
$scope.animationsEnabled = true;
$scope.open = function (size) {
	 var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'deliverrDetail.html',
      controller: 'addDeliverModalInstanceCtrl',
	  size:size,
      resolve: {
        items: function () {
          return;
        }
      }
    });
};

$scope.toggleAnimation = function () {
$scope.animationsEnabled = !$scope.animationsEnabled;
  };
   $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  }; 
 var datePickerOption=this;
 $scope.datePickerOptions=[{date:"today"},{date:"Yesterday"},{date:"Last 7 Days"},{date:"Last 30 Days"},{date:"This Month"},{date:"This Month"},{date:"Last Month"},{date:"Custom Range"}];
  var deliverStatus=this;
  $scope.deliverStatusOptions=[{status:"All"},{status:"Open"},{status:"All"}];
});

easydrop.controller('addDeliverModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
$scope.ok = function () {
    $uibModalInstance.close();
  };
$scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
//Driver Pop up Ctrl end
//Add Item Popup Ctrl
easydrop.controller('addProductDetailCtrl',function($scope) {
  $scope.deliverProductDetails = [];
  $scope.counter = [];
   $scope.addProductDetail = function() {
    
    $scope.deliverProductDetails.push('deliverProductDetail ' + $scope.counter);
    $scope.counter++;
  }
  
});
//Add Item Popup Ctrl end
// Date Picker Pop Up Controller
easydrop.controller('DatepickerPopupDemoCtrl', function($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();


  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };
 $scope.formats = ['dd-MM-yyyy'];
  $scope.format = $scope.formats[0];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});
// Date Picker Pop Up Controller end
//companySettingsCtrl
easydrop.controller('companySettingsCtrl',function($scope) {
var countryobj=this;
$scope.countries=[{countryName:"--Please Select--"},{countryName:"Chile"},{countryName:"China"},{countryName:"India"}];
});
//Manage Run
easydrop.controller('manageRunDetailCtrl',function($scope) {
var runDetailobj=this;
$scope.runDeliveryDetails=[{RunDetail:"004_SYD_WED_Macquarie/Pitt",scheduleDate:"21/06/2016",driver:"szdcv"},
						   {RunDetail:"013_SYD_WED_Lane Cove",scheduleDate:"21/06/2016",driver:"szdcv"},
						   {RunDetail:"014_SYD_WED_Parramatta",scheduleDate:"21/06/2016",driver:"szdcv"},
						   {RunDetail:"gvhjm",scheduleDate:"21/06/2016"},
						  ];
});
//datePickermanageRunCtrl
easydrop.controller('datePickermanageRunCtrl', function($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();


  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };
 $scope.formats = ['dd-MM-yyyy'];
  $scope.format = $scope.formats[0];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});
//datePickermanageRunCtrl end
// Manage Run 
easydrop.controller('viewRunDeliveryDetailPopUpCtrl', function ($scope, $uibModal) {
var viewDeliverobj=this;
$scope.runDeliveryDetails=[{seq:"1",jobID:"598424",customerName:"Glencore Australia - Level 38 - Monday",address:"1 Macquarie Place",city:"City",deliveredDate:"21/06/2016"},
						   {seq:"2",jobID:"598428",customerName:"Glencore Australia - Level 44 - Wednesday",address:"1 Macquarie Place",city:"City",deliveredDate:"21/06/2016"},
						   {seq:"3",jobID:"600581",customerName:"Lee And Lyons - Wednesday #02",address:"131 Macquarie St",city:"City",deliveredDate:"21/06/2016"},
						   {seq:"4",jobID:"600547",customerName:"Glencore Australia - Level 44 - Wednesday",address:"1 Macquarie Place",city:"City",deliveredDate:"21/06/2016"},
						   {seq:"5",jobID:"598428",customerName:"Glencore Australia - Level 44 - Wednesday",address:"1 Macquarie Place",city:"City",deliveredDate:"21/06/2016"},
						   {seq:"6",jobID:"600581",customerName:"Lee And Lyons - Wednesday #02",address:"131 Macquarie St",city:"City",deliveredDate:"21/06/2016"},
						   {seq:"7",jobID:"600547",customerName:"Glencore Australia - Level 44 - Wednesday",address:"1 Macquarie Place",city:"City",deliveredDate:"21/06/2016"},
						  ];

$scope.animationsEnabled = true;
$scope.open = function (size) {
	 var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'viewRunDeliverrDetail.html',
      controller: 'viewDeliverModalInstanceCtrl',
	  size:size,
      resolve: {
        items: function () {
          return;
        }
      }
    });
};

$scope.toggleAnimation = function () {
$scope.animationsEnabled = !$scope.animationsEnabled;
  };
});

easydrop.controller('viewDeliverModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
$scope.ok = function () {
    $uibModalInstance.close();
  };
$scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
// Manage Run end
// deliveryHistoryDatepickerPopupCtrl 
easydrop.controller('deliveryHistoryDatepickerPopupCtrl', function($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();


  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };
 $scope.formats = ['dd-MM-yyyy'];
  $scope.format = $scope.formats[0];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});
// Date Picker Pop Up Controller end
//Deliver history table
easydrop.controller('deliveryHistoryCtrl', function($scope) {
var deliverHistoryDetailobj=this;
$scope.deliverHistories=[{runName:"004_SYD_WED_Macquarie/Pitt",seq:"1",jobId:"598424",customerName:"Glencore Australia - Level 38 - Monday",address:"1 Macquarie Place",city:"SYDNEY",status:"Open",driver:"",scheduleDate:"21/06/2016",deliverDate:"",receivedBy:"",deliverComments:""},
						 {runName:"004_SYD_WED_Macquarie/Pitt",seq:"2",jobId:"600581",customerName:"Lee And Lyons - Wednesday #02",address:"1 Macquarie Place",city:"SYDNEY",status:"Open",driver:"",scheduleDate:"21/06/2016",deliverDate:"",receivedBy:"",deliverComments:""},
						 {runName:"004_SYD_WED_Macquarie/Pitt",seq:"3",jobId:"598424",customerName:"Glencore Australia - Level 44 - Monday",address:"1 Macquarie Place",city:"SYDNEY",status:"Open",driver:"",scheduleDate:"21/06/2016",deliverDate:"",receivedBy:"",deliverComments:""},
						 {runName:"004_SYD_WED_Macquarie/Pitt",seq:"4",jobId:"600581",customerName:"Glencore Australia - Level 44 - Monday",address:"1 Macquarie Place",city:"SYDNEY",status:"Open",driver:"",scheduleDate:"21/06/2016",deliverDate:"",receivedBy:"",deliverComments:""},
						];
});
//Deliver history table end

easydrop.controller('viewDeliverHistoryDetailCtrl', function ($scope, $uibModal) {
	var viewRunDeliverobj=this;
$scope.runHistoryDetails=[{seq:"1",jobID:"598424",customerName:"Glencore Australia - Level 38 - Monday",address:"1 Macquarie Place",city:"Sydney",deliveredDate:"21/06/2016"},
						   {seq:"2",jobID:"598428",customerName:"Glencore Australia - Level 44 - Wednesday",address:"1 Macquarie Place",city:"Sydney",deliveredDate:"21/06/2016"},
						   {seq:"3",jobID:"600581",customerName:"Lee And Lyons - Wednesday #02",address:"131 Macquarie St",city:"Sydney",deliveredDate:"21/06/2016"},
						   {seq:"4",jobID:"600547",customerName:"Glencore Australia - Level 44 - Wednesday",address:"1 Macquarie Place",city:"Sydney",deliveredDate:"21/06/2016"},
						   {seq:"5",jobID:"598428",customerName:"Glencore Australia - Level 44 - Wednesday",address:"1 Macquarie Place",city:"Sydney",deliveredDate:"21/06/2016"},
						   {seq:"6",jobID:"600581",customerName:"Lee And Lyons - Wednesday #02",address:"131 Macquarie St",city:"Sydney",deliveredDate:"21/06/2016"},
						   {seq:"7",jobID:"600547",customerName:"Glencore Australia - Level 44 - Wednesday",address:"1 Macquarie Place",city:"Sydney",deliveredDate:"21/06/2016"},
						  ];
$scope.animationsEnabled = true;
$scope.open = function (size) {
	 var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'runDetail.html',
      controller: 'addDeliverModalInstanceCtrl',
	  size:size,
      resolve: {
        items: function () {
          return;
        }
      }
    });
};
$scope.open1 = function (size) {
	 var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'deliverrDetail.html',
      controller: 'addDeliverModalInstanceCtrl',
	  size:size,
      resolve: {
        items: function () {
          return;
        }
      }
    });
};
$scope.toggleAnimation = function () {
$scope.animationsEnabled = !$scope.animationsEnabled;
  };
});

easydrop.controller('addDeliverModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
$scope.ok = function () {
    $uibModalInstance.close();
  };
$scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

//map DatepickerCtrl
easydrop.controller('mapDriverTrackingCtrl', function($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();


  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };
 $scope.formats = ['dd-MM-yyyy'];
  $scope.format = $scope.formats[0];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});
//
easydrop.controller('driverTrackingCtrl', function($scope) {
	  function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
//Side Menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
});