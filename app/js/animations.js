var izegemAnimations = angular.module('izegemAnimations', ['ngAnimate']);

izegemAnimations.animation('.locatie', function () {
    var animateUp = function (element, className, done) {
        if (className != 'active') {
            return;
        }
        element.css({
            position: 'absolute',
            top: 500,
            left: 0,
            display: 'block'
        });

        jQuery(element).animate({
            top: 0
        }, done);

        return function (cancel) {
            if (cancel) {
                element.stop();
            }
        };
    }

    var animateDown = function (element, className, done) {
        if (className != 'active') {
            return;
        }
        element.css({
            position: 'absolute',
            left: 0,
            top: 0,
        });

        jQuery(element).animate({
            top: -500
        }, done);

        return function (cancel){ 
            if (cancel) {
                element.stop();
            }
        };
    }

    return {
        addClass: animateUp,
        removeClass: animateDown
    };
});

$(function () {
    var navMain = $("#navbar-collapse");
    navMain.on("click", "a", null, function () {
        if (navMain.hasClass("in") && $(window).width() < 768) {
            console.log('navbar is open')
            setTimeout(function () { navMain.collapse('hide') }, 500);
        }
        return;
    });
});