var app = angular.module('app');

app.directive('homenav', ['$document',function() {
    return {
        retrict: 'E',
        templateUrl: 'script/directives/homeNav.html'
    };
}]);