var carapp1;
(function (carapp1) {
    angular.module('carapp1', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: carapp1.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('modal', {
            url: '/modal',
            templateUrl: '/ngApp/modal.html',
            controller: carapp1.Controllers.HomeController,
            controllerAs: 'modal'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(carapp1 || (carapp1 = {}));
