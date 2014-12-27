'use strict';

/* App Module */

var izegemApp = angular.module('izegemApp', [
    'ngRoute',

    'izegemControllers',
    'izegemServices'
]);

izegemApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'partials/homepage.html',
            controller: 'HomepageCtrl'
        }).
        when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'GalleryCtrl'
        }).
        when('/locaties/:locatieId', {
            templateUrl: 'partials/galleryDetail.html',
            controller: 'GalleryDetailCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);