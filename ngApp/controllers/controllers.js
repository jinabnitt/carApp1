var carapp1;
(function (carapp1) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($uibModal, $http) {
                this.$uibModal = $uibModal;
                this.$http = $http;
            }
            HomeController.prototype.showModal = function (id) {
                var _this = this;
                this.$uibModal.open({
                    templateUrl: 'ngApp/modal.html',
                    controller: 'DialogController',
                    controllerAs: 'modal',
                    resolve: {
                        id: function () { return id; }
                    },
                    size: 'lg'
                });
                if (this.car) {
                    this.$http.get('api/cars/' + this.car)
                        .then(function (results) {
                        _this.cars = results.data;
                        console.log(results.data);
                    }).catch(function (results) {
                        console.log('Could not retrieve cars');
                    });
                }
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
            };
            HomeController.prototype.getMake = function () {
                var _this = this;
                if (this.search) {
                    this.$http.get('api/makes/search/' + this.search)
                        .then(function (results) {
                        _this.makes = results.data;
                    }).catch(function (results) {
                        console.log('Could not retrieve makes');
                    });
                }
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('carapp1').controller('HomeController', HomeController);
        var DialogController = (function () {
            function DialogController(id, $uibModalInstance) {
                this.id = id;
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
