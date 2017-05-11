var carapp1;
(function (carapp1) {
    var Controllers;
    (function (Controllers) {
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
            };
            return CarsController;
        }());
        Controllers.CarsController = CarsController;
    })(Controllers = carapp1.Controllers || (carapp1.Controllers = {}));
})(carapp1 || (carapp1 = {}));
