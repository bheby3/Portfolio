var app = angular.module('app');

app.directive('thirdbackground', ['$document',function() {
    return {
        retrict: 'E',
        templateUrl: 'script/directives/thirdBackGround.html',
    };
}]);