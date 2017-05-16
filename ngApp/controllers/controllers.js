var carapp1;
(function (carapp1) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal, $http) {
                this.$uibModal = $uibModal;
                this.$http = $http;
            }
            HomeController.prototype.showModal = function (ShortDescription) {
                this.$uibModal.open({
                    templateUrl: 'ngApp/modal.html',
                    controller: 'DialogController',
                    controllerAs: 'modal',
                    resolve: {
                        ShortDescription: function () { return ShortDescription; }
                    },
                    size: 'lg'
                });
            };
            HomeController.prototype.fetch = function () {
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
    })(Controllers = carapp1.Controllers || (carapp1.Controllers = {}));
})(carapp1 || (carapp1 = {}));
