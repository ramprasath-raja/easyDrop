app.config(['$httpProvider', function($httpProvider) {
    
    $httpProvider.defaults.useXDomain = true;   
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
    $httpProvider.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8";
    }
]); 

app.factory("apiFactory", ['$http','$rootScope','ED_CONFIG',
    function ($http,$rootScope, GH_CONFIG) { // This service connects to our REST API
        var serviceBase = GH_CONFIG.API_PATH;
        var currentUserToken = localStorage.getItem("token");
        
        var transform = function(data){
            if (data != undefined){
                return $.param(data);
            }
        }
                
        var obj = {};
        obj.get = function (q, object) {
            if (currentUserToken) {
                $http.defaults.headers.common['Authorization'] = 'bearer ' + currentUserToken; 
            }
            return $http.get(serviceBase + q + object).then(function (results) {
                return results.data;
            });
        };

        obj.post = function (q, object) {
            if (currentUserToken) {
                $http.defaults.headers.common['Authorization'] = 'bearer ' + currentUserToken; 
            }
            return $http.post(serviceBase + q, object.data,{transformRequest: transform}).then(function (results) {
                return results.data;
            });
        };
        obj.postjsonupload = function (q, object) {
            if (currentUserToken) {
                $http.defaults.headers.common['Authorization'] = 'bearer ' + currentUserToken; 
            }
            return $http.post(serviceBase + q,object, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(function (results) {
                return results;
            });
        };

        obj.put = function (q, object) {
            if (currentUserToken) {
                $http.defaults.headers.common['Authorization'] = 'bearer ' + currentUserToken; 
            }
            if(object != undefined){
                return $http.put(serviceBase + q, object.data,{transformRequest: transform}).then(function (results) {
                    return results.data;
                });
            }
        };
        obj.delete = function (q) {
            if (currentUserToken) {
                $http.defaults.headers.common['Authorization'] = 'bearer ' + currentUserToken; 
            }
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            });
        };

        return obj;
}]);