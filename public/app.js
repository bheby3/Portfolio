var app = angular.module('app', ['ui.router', 'firebase']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'mainCtrl'
        })
        .state('social', {
            url: '/social',
            templateUrl: 'templates/social.html'
        })
        .state('skills', {
            url: '/skills',
            templateUrl: 'templates/skills.html'
        })
        .state('portfolio', {
            url: '/portolio',
            templateUrl: 'templates/portfolio.html'
        })
        .state('resume', {
            url: '/resume',
            templateUrl: 'templates/resume.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        })


    $urlRouterProvider
        .otherwise('/home');
});
