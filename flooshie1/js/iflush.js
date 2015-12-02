angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
    
    $scope.peeCount;
    $scope.pooCount;
    $scope.gender;
    var data;
    
    
    $scope.accessToken = "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed";
    
    $scope.deviceId1 = "00e04c035ad5";
    $scope.URL1 = "https://api-http.littlebitscloud.cc/devices/" + $scope.deviceId1 + "/output";
    
    $scope.deviceId2 = "243c200bf913";
    $scope.URL2 = "https://api-http.littlebitscloud.cc/devices/" + $scope.deviceId2 + "/output";
    
    $http.defaults.headers.common.Authorization = "Bearer " + $scope.accessToken;
    
    $scope.poo = function(){
        console.log("POO");
        $http.post($scope.URL2, {percent: 100, duration_ms: 4000})
        .success(function(data){
            $scope.pooCount++;
            console.log("Poo count increased to " + $scope.pooCount)
            alert("Flooshed!");
            $scope.updateLocalStorage();
        })
        .error(function(err){
            console.log(err);
        })
    };
    
    $scope.pee = function(){
        console.log("PEE");
        $http.post($scope.URL2, {percent: 100, duration_ms: 2000})
        .success(function(data){
            $scope.peeCount++;
            console.log("Pee count increased to " + $scope.peeCount)
            alert("Flooshed!");
            $scope.updateLocalStorage();
        })
        .error(function(err){
            console.log(err);
        })
    };
    
    $scope.changeSettings = function (gender) {
        $scope.gender = gender;
        $scoe.updateLocalStorage();
    }
    
    $scope.updateLocalStorage = function () {
        var data = {
            peeCount: $scope.peeCount,
            pooCount: $scope.pooCount,
            gender: $scope.gender
        };
        localStorage.setItem("data", JSON.stringify(data));

    };
    
    $scope.initFromLocalStorage = function () {
       if(localStorage["data"]){
            data = JSON.parse(localStorage.getItem("data"));
            $scope.peeCount = data.peeCount;
            $scope.pooCount = data.pooCount;
            $scope.gender = data.gender;
        } else {
            data = {peeCount: 0, pooCount: 0, gender: "male"};
            $scope.toggleSettings ();
            localStorage.setItem("data",JSON.stringify(data));
            $scope.initFromLocalStorage();
        }; 
    };

    $scope.toggleSettings = function () {
        $("#settingsPanel").slideToggle ();
    };
    
    $scope.initFromLocalStorage();
    
    
}]);


