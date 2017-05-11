namespace carapp1.Services {

    export class CarService {
        private carResource;

        public listcars() {
            return this.carResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.carResource = $resource('/api/cars');
        }
    }
    angular.module('carapp1').service('CarService', CarService);
    export class MyService {

    }
    angular.module('carapp1').service('MyService', MyService);
    }
