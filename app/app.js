var app = angular.module('easydrop', 
    ['oc.lazyLoad', 'ui.router', 'ui.bootstrap','ed.environmentConfigs']);

app.config(function($stateProvider, $ocLazyLoadProvider, $urlRouterProvider) {
    $stateProvider
    .state('home',{
        url:'/home',
        controller: 'homeCtrl',
        templateUrl:'app/views/home.html',
        resolve: {
            loadMyFiles:function($ocLazyLoad) {
                return $ocLazyLoad.load({
                  name:'easydrop',
                  files:[
                    'app/controller/homeController.js',
                  ]
                })
            }
        }
    })
    .state('login',{
        url:'/login',
        controller: 'loginCtrl',
        templateUrl:'app/login.html',
        resolve: {
            loadMyFiles:function($ocLazyLoad) {
                return $ocLazyLoad.load({
                  name:'easydrop',
                  files:[
                    'app/controller/loginController.js',
                  ]
                })
            }
        }
    });
    $urlRouterProvider.otherwise('/');
});

app.directive('menuToggle', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.parent().children().removeClass('active');
                element.addClass('active');
            })
        },
    }
})


