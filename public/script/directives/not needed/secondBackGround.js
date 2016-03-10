var app = angular.module('app');

app.directive('secondbackground', ['$document',function() {
    return {
        retrict: 'E',
        templateUrl: 'script/directives/secondBackGround.html',
    };
}]);