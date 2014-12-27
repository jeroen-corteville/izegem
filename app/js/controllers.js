'use strict';

/* Controllers */

var izegemControllers = angular.module('izegemControllers', []);

izegemControllers.controller('IzegemAppCtrl', ['$scope', 'Phone',
  //function ($scope, Phone) {
  //    $scope.phones = Phone.query();
  //    $scope.orderProp = 'age';
  //}
]);

izegemControllers.controller('HomepageCtrl', ['$scope',
    function ($scope) {
        $('#home').addClass("active");
        $('#gallery').removeClass("active");

    }]);

izegemControllers.controller('GalleryCtrl', ['$scope', 'Locatie',
    function ($scope, Locatie) {
        $('#home').removeClass("active");
        $('#gallery').addClass("active");

        $scope.locaties = Locatie.query();





        //$scope.pictures = [];
        //$scope.galleryactive = "active"

        //var onPhotosDownloaded = function (response) {
        //    angular.forEach(response.data.Fotos.fotos, function (value, key) {
        //        var newFoto = new Foto(value.locatie, value.locatieid,value.bestandslocatie, value.descriptie);
        //        $scope.pictures.push(newFoto);
        //    });
        //}

        //var onError = function (response) {

        //}
        //$http.get('../fotos.json').then(onPhotosDownloaded, onError);
    }]);


izegemControllers.controller('GalleryDetailCtrl', ['$scope', '$http','$routeParams','Locatie',
    function ($scope, $routeParams,Locatie) {
        $scope.locatie = Locatie.get({ locatieId: $routeParams.locatieId }, function (locatie) {
            $scope.mainImageUrl = locatie.fotos[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }
]);