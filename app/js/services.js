var izegemServices = angular.module('izegemServices', ['ngResource']);

izegemServices.factory('Locatie', ['$resource',
    function ($resource) {
        return $resource('locaties/:locatieId.json', {}, {
            query: { method: 'GET', params: { locatieId: 'locaties' }, isArray: true }
        });
}]);
