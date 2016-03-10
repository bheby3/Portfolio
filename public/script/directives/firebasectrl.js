var app = angular.module('app');

app.controller('firebasectrl', function($scope, $firebaseArray) {

    var ref = new Firebase("https://portfolioproject.firebaseio.com/contact");
    //var objRef = new Firebase("https://newly.firebaseio.com/object");

    //var obj = $firebaseObject(objRef);
    //obj.$bindTo($scope, 'theObject');

    //$scope.makeObj = function() {
    //    $scope.theRealObject = {data: $scope.theObject};
    //}

    $scope.allTheData = $firebaseArray(ref);  //this is like an array we would normally use

    $scope.addData = function(user) { //receive user
        $scope.allTheData.$add(user);
        $scope.user = {};
    }
});

//collect data into an object. push object into firebase array