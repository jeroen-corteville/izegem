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
izegemControllers.controller('QuizCtrl', ['$scope','$http',
    function ($scope,$http) {
        $('#home').removeClass("active");
        $('#gallery').removeClass("active");
        $('#vroegerennu').removeClass("active");
        $('#quiz').addClass('active');
        $('#about').removeClass('active');

        $scope.score = 0;
        $scope.aantalVragen = 0

        $scope.vragen = [];

        var selecAntwoorden = [];
        var AlleAntwoorden = []

        var onVragenDownloaded = function (response) {
            //Hier moet de quiz geinitializeerd worden. 10 random vragen worden getrokken tussen alle vragen die aanwezig zijn.

            AlleAntwoorden = response.data.Vragen.vragen;
            var AlleAntwoordenLength = response.data.Vragen.vragen.length;
            
            //10 random vraagnummers in Array steken:
            while (selecAntwoorden.length < 10) {
                var randomNumber = Math.ceil(Math.random() * AlleAntwoordenLength)
                console.log(randomNumber);
                var found = false;
                for (var i = 0; i < selecAntwoorden.length; i++) {
                    console.log('Geselecteerd Antwoordnummer: ' + selecAntwoorden[i]);
                    console.log('RandomNummer: ' + randomNumber);
                    if (selecAntwoorden[i] == randomNumber) {
                        found = true;
                        break;
                    }
                }
                if (!found) selecAntwoorden[selecAntwoorden.length] = randomNumber;
            }
            console.log(selecAntwoorden);
            volgendeVraag();
        }

        var AddClickEventsAntwoorden = function () {
            $('.antwoord').click(function () {
                if ($(this).hasClass('correct')) {
                    $(this).css({
                        'background-color': 'green',
                        'color': 'white'
                    });
                    $('.antwoord').unbind('click');
                    $scope.score = $scope.score + 1
                }
                else {
                    $(this).css({
                        'background-color': 'red',
                        'color': 'white'
                    });
                    $('.antwoord').unbind('click');
                    ToonJuistAntwoord();
                }
                $scope.aantalVragen = $scope.aantalVragen + 1;
                $scope.$apply();
                setTimeout(volgendeVraag, 500);
            });
            
        }

        var volgendeVraag = function () {
            console.log('laden van de volgende vraag');
            console.log(selecAntwoorden[0]);
            if (selecAntwoorden[0]) {
                var Opgehaaldevraag = AlleAntwoorden[selecAntwoorden[0] - 1];
                console.log(AlleAntwoorden[selecAntwoorden[0] - 1]);
                var newVraag = new Vraag(Opgehaaldevraag.Vraag, Opgehaaldevraag.Foto, Opgehaaldevraag.CorrectAntwoord, Opgehaaldevraag.FouteAntwoorden);
                $scope.vragen.splice($scope.vragen.indexOf(newVraag),1);
                $scope.vragen.push(newVraag);
                selecAntwoorden.splice(0, 1);
                
                setTimeout(AddClickEventsAntwoorden, 5);
                setTimeout(RandomizeAntwoorden,10);
            }
        }

        var ToonJuistAntwoord = function () {
            console.log('nu moet het juiste antwoord verschijnen');
            $('.correct').css({ 'background-color': 'green' });
        }
        
        //var antwoorden = document.querySelector('.antwoorden');
        //for (var i = antwoorden.children.length; i >= 0; i--) {
        //    antwoorden.appendChild(antwoorden.children[Math.random() * i | 0]);
        //}

        var onError = function (response) {

        }

        $http.get('quizvragen/quizvragen.json').then(onVragenDownloaded, onError);

        var RandomizeAntwoorden = function () {
            var Antwoorden = document.querySelector('.antwoorden');
            for (var i = Antwoorden.children.length; i >= 0; i--) {
                Antwoorden.appendChild(Antwoorden.children[Math.random() * i | 0]);
            }
        }
    }]);

izegemControllers.controller('AboutCtrl', ['$scope',
    function ($scope) {
        $('#home').removeClass("active");
        $('#gallery').removeClass("active");
        $('#vroegerennu').removeClass("active");
        $('#quiz').removeClass('active');
        $('#about').addClass('active');
    }]);