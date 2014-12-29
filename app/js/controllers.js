'use strict';

/* Controllers */

var izegemControllers = angular.module('izegemControllers', []);

//izegemControllers.controller('IzegemAppCtrl', ['$scope', 'Phone',

//]);

izegemControllers.controller('HomepageCtrl', ['$scope',
    function ($scope) {
        $('#home').addClass("active");
        $('#gallery').removeClass("active");
        $('#vroegerennu').removeClass("active");
        $('#quiz').removeClass('active');
        $('#about').removeClass('active');

    }]);
izegemControllers.controller('GalleryCtrl', ['$scope', 'Locatie',
    function ($scope, Locatie) {
        $('#home').removeClass("active");
        $('#gallery').addClass("active");
        $('#vroegerennu').removeClass("active");
        $('#quiz').removeClass('active');
        $('#about').removeClass('active');

        $scope.locaties = Locatie.query();
    }]);
izegemControllers.controller('GalleryDetailCtrl', ['$scope','$routeParams','Locatie',
    function ($scope, $routeParams,Locatie) {
        $scope.locatie = Locatie.get({ locatieId: $routeParams.locatieId }, function (locatie) {
            $scope.mainImageUrl = locatie.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }
]);
izegemControllers.controller('VroegerNuCtrl', ['$scope',
    function ($scope) {
        $('#home').removeClass("active");
        $('#gallery').removeClass("active");
        $('#vroegerennu').addClass("active");
        $('#quiz').removeClass('active');
        $('#about').removeClass('active');
    }]);
izegemControllers.controller('QuizCtrl', ['$scope',
    function ($scope) {
        $('#home').removeClass("active");
        $('#gallery').removeClass("active");
        $('#vroegerennu').removeClass("active");
        $('#quiz').addClass('active');
        $('#about').removeClass('active');
    }]);

izegemControllers.controller('AboutCtrl', ['$scope',
    function ($scope) {
        $('#home').removeClass("active");
        $('#gallery').removeClass("active");
        $('#vroegerennu').removeClass("active");
        $('#quiz').removeClass('active');
        $('#about').addClass('active');
    }]);