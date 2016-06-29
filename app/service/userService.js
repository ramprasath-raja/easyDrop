app.service('userService', function(apiFactory){
  this.login = function (data, callback){
    param = '?username=' + data.user.username + '&password=' + data.user.password;
    apiFactory.get('v1/login', param).then(function(results) {
      callback(results);                
    });
  };
});
