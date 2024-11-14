var app = angular.module('myApp', []);
app.controller('LoginController', function($scope,$http) {
  $scope.username 
  $scope.password 
  $scope.submitLoginForm= function login(){
	  const custom_headers={
		  'Content-Type' : 'application/json',
		  'Accept' : 'application/json'
	  };
	  const request= {
		  'username':  $scope.username,
		  'password':  $scope.password
	  };
   $http({
    method : "POST",
      url : "http://localhost:8080/Login",
      data: request,
      headers:custom_headers
  }).then(function mySuccess(response) {
    $scope.myWelcome = response.data;
    console.log("Success "+response)
  }, function myError(response) {
    $scope.myWelcome = response.statusText;
     console.log("Failure "+response)
  });
  }
  $scope.submitLoginForm1= function login(){
   $http({
    method : "POST",
      url : "http://localhost:8080/check"
  }).then(function mySuccess(response) {
    $scope.myWelcome = response.data;
    console.log("Success "+response)
  }, function myError(response) {
    $scope.myWelcome = response.statusText;
     console.log("Failure "+response)
  });
  
  }
  
  
  
  
});
