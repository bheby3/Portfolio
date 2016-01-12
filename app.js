var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
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
        .state('firebase', {
            url: '/firebase',
            templateUrl: 'script/directives/firebase.html'
        });

    $urlRouterProvider
        .otherwise('/home');
});
