'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        })
        .when('/termine', {
            templateUrl: 'views/termine.html',
            controller: 'View1Ctrl'
        })
        .when('/verein', {
            templateUrl: 'views/verein.html',
            controller: 'View1Ctrl'
        })
        .when('/veranstaltungen', {
            templateUrl: 'views/veranstaltungen.html',
            controller: 'View1Ctrl'
        })
        .when('/kontakt', {
            templateUrl: 'views/kontakt/kontakt.html',
            controller: 'View1Ctrl'
        });

}])


.controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {

    angular.extend($scope, {
        resetContactForm: resetContactForm,
        submitContactForm: submitContactForm

    });

    resetContactForm();


    ///////////////////////

    function resetContactForm(event) {
        if(event) {
            event.preventDefault();
        }
        
        $scope.contact = {
            _subject: 'OSCT | Kontaktformular'
        };
        $scope.messageSent = false;
    }

    // Slider
    $('.multiple-items').slick({
        fade: true,

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    function submitContactForm(ev) {

        ev.preventDefault();

        $http.post('http://formspree.io/office@osct.at', $scope.contact)
            .success(function () {
                $scope.messageSent = true;
            });
    }

}]);
