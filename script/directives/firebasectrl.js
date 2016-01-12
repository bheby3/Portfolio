//angular.module('directivePractice')
//    .controller('myCtrl', function ($scope) {
//
//        $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
//
//        $scope.test = 'Two way data binding!';
//
//        $scope.announceDay = function(lesson, day) {
//            if (day !== undefined) {
//                alert(lesson + ' is active on ' + day)
//            } else {
//                alert(lesson + ' is not scheduled ');
//            }
//        };
//        $scope.clicked = function(lesson) { //loop through lessons and splice it out if clicked
//
//        }
//
//
//    });
var app = angular.module('app');

app.controller('mainCtrl', function($scope, $firebaseArray, $firebaseObject) {

    var ref = new Firebase("https://newly.firebaseio.com/object");
    var objRef = new Firebase("https://newly.firebaseio.com/object");

    var obj = $firebaseObject(objRef);

    obj.$bindTo($scope, 'theObject');

    $scope.makeObj = function() {
        $scope.theRealObject = {data: $scope.theObject};
    }

    $scope.allTheData = $firebaseArray(ref);  //this is like an array we would normally use

    $scope.addData = function() {
        $scope.allTheData.$add($scope.theData);
    }
    $scope.consoleLogThings = function() {
        console.log($scope.allTheData);
    }

    $scope.removeData = function(ref) {
        $scope.allTheData.$remove(ref);
    }
    $scope.delete = function() {
        ref.remove();
    }

});