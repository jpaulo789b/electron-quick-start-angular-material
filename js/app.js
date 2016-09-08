(function() {
    'use strict';
    angular.module('TEMPLATE', ['ngMaterial','ngMdIcons','ui.router'])
    .controller('TEMPLATECONTROLLER', function ($scope, $timeout, $mdSidenav, $log) {

    })
    .run(function () {

    })
    .service("servico",["$rootScope", "$q", function ($rootScope, $q) {

    }])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
                .state('inicio', {
                    url: "/home",
                    templateUrl: "pages/info/inicio.html",
                    controller: "homeCTRL"
                });
                $urlRouterProvider.otherwise("/inicio");
    })
})();
