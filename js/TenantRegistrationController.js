
var app = angular.module('myApp', []);
app.controller('registerTenantController', function($scope,$http) {
  $scope.fname 
  $scope.lname
  $scope.email
  $scope.mobile
  $scope.address
  $scope.adhaar
  $scope.date
  $scope.room
  $scope.building
  $scope.tenantRegistrationForm= function login(){
	  const custom_headers={
		  'Content-Type' : 'application/json',
		  'Accept' : 'application/json'
	  };
	  const request= {
		  'fname':  $scope.fname,
		  'lname':  $scope.lname,
		  'email': $scope.email,
		  'mobile': $scope.mobile,
		  'address': $scope.address,
		  'adhaar': $scope.adhaar,
		  'rent': $scope.rent,
		  'date': $scope.date,
		  'room' :$scope.room,
		  'building': $scope.building
	  };
   $http({
    method : "POST",
      url : "http://localhost:8080/registerTenant",
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
  $scope.submitLoginForm17= function login(){
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

