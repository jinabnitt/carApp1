var carapp1;
(function (carapp1) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal) {
                this.$uibModal = $uibModal;
            }
            HomeController.prototype.showModal = function (ShortDescription) {
                this.$uibModal.open({
                    templateUrl: 'ngApp/modal.html',
                    controller: 'DialogController',
                    controllerAs: 'modal',
                    resolve: {
                        ShortDescription: function () { return ShortDescription; }
                    },
                    size: 'sm'
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('carapp1').controller('HomeController', HomeController);
        var DialogController = (function () {
            function DialogController(ShortDescription, $uibModalInstance) {
                this.ShortDescription = ShortDescription;
                this.$uibModalInstance = $uibModalInstance;
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return DialogController;
        }());
        angular.module('carapp1').controller('DialogController', DialogController);
        var CarsController = (function () {
            function CarsController($http) {
                this.$http = $http;
            }
            CarsController.prototype.fetch = function () {
                var _this = this;
                if (this.search) {
                    this.$http.get('api/cars/search/' + this.search)
                        .then(function (results) {
                        _this.cars = results.data;
                    }).catch(function (results) {
                        console.log('Could not retrieve cars');
                    });
                }
                else if (this.list) {
                    this.$http.get('api/cars/search/' + this.list)
                        .then(function (results) {
                        _this.cars = results.data;
                    }).catch(function (results) {
                        console.log('Could not retrieve cars');
                    });
                }
            };
            return CarsController;
        }());
        Controllers.CarsController = CarsController;
        angular.module('carapp1').controller('CarsController', CarsController);
    })(Controllers = carapp1.Controllers || (carapp1.Controllers = {}));
})(carapp1 || (carapp1 = {}));
