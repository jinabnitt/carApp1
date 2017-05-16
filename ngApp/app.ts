namespace carapp1 {

    angular.module('carapp1', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
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

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}
