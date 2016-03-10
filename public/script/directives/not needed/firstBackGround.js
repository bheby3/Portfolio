var app = angular.module('app');

app.directive('firstbackground', ['$document',function() {
    return {
        retrict: 'E',
        templateUrl: 'script/directives/firstBackGround.html',
    };
}]);