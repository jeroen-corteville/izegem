'use strict';

/* Services */
var izegemServices = angular.module('izegemServices', ['ngResource']);

izegemServices.factory('Locatie', ['$resource',
    function ($resource) {
        return $resource('locaties/:locatieId.json', {}, {
            query: { method: 'GET', params: { locatieId: 'locaties' }, isArray: true }
        });
    }]);

izegemServices.factory('VroegerNu', ['$resource',
    function ($resource) {
        return $resource('vroegernu/:vroegernuId.json', {}, {
            query: {method: 'GET',params:{vroegernuId: 'vroegernu'}, isArray: true}
        });
    }
]);
