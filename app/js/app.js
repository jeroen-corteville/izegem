'use strict';

/* App Module */



(function () {

    var izegemApp = angular.module('izegemApp', [
    'ngRoute',

    'izegemControllers',
    'izegemServices',
    'izegemAnimations'
    ]);

    izegemApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'partials/homepage.min.html',
                title: "Homepage",
                controller: 'HomepageCtrl'
            }).
            when('/gallery', {
                templateUrl: 'partials/gallery.min.html',
                title: "Gallerij",
                controller: 'GalleryCtrl'
            }).
            when('/locaties/:locatieId', {
                templateUrl: 'partials/galleryDetail.min.html',
                title: "Locatiedetail",
                controller: 'GalleryDetailCtrl'
            }).
            when('/vroegerennu', {
                templateUrl: 'partials/vroegernu.min.html',
                title: "Vroeger en Nu",
                controller: 'VroegerNuCtrl'
            }).
            when('/quiz', {
                templateUrl: 'partials/quiz.min.html',
                title: "Quiz",
                controller: 'QuizCtrl'
            }).
            when('/about', {
                templateUrl: 'partials/about.min.html',
                title: "Over",
                controller: 'AboutCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
        }
    ]);

    izegemApp.run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }]);
})();