var app = angular.module('app');

app.directive('navbar', ['$document',function() {
    return {
        retrict: 'E',
        templateUrl: 'script/directives/navbar.html',
    };
}]);