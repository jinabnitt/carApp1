var carapp1;
(function (carapp1) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
                this.carResource = $resource('/api/cars');
            }
            CarService.prototype.listcars = function () {
                return this.carResource.query();
            };
            return CarService;
        }());
        Services.CarService = CarService;
        angular.module('carapp1').service('CarService', CarService);
        var MyService = (function () {
            function MyService() {
            }
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('carapp1').service('MyService', MyService);
    })(Services = carapp1.Services || (carapp1.Services = {}));
})(carapp1 || (carapp1 = {}));
