(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  $scope.geo={};
  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
	$http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
        .success((data)=>{
        $scope.geo=data;
    })



}]);





})();
