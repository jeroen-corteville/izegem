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


    }]);

izegemControllers.controller('GalleryCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.pictures = [];

        var onPhotosDownloaded = function (response) {
            angular.forEach(response.data.Fotos.fotos, function (value, key) {
                var newFoto = new Foto(value.locatie, value.bestandslocatie, value.descriptie);
                $scope.pictures.push(newFoto);
            });
        }

        var onError = function (response) {

        }

        $http.get('../fotos.json').then(onPhotosDownloaded, onError);


    }]);

izegemControllers.controller('HomepageCtrlazerty', ['$scope', '$routeParams', 'Phone',
  //function ($scope, $routeParams, Phone) {
  //    $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
  //        $scope.mainImageUrl = phone.images[0];
  //    });

  //    $scope.setImage = function (imageUrl) {
  //        $scope.mainImageUrl = imageUrl;
  //    }
  //
]);