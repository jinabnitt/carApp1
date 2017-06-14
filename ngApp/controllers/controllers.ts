namespace carapp1.Controllers {

       export class HomeController {

         public cars;
         public search;
         public list;
         public id;
         public car;
         public makes;

        public showModal(id: number) {
            this.$uibModal.open({
                templateUrl: 'ngApp/modal.html',
                controller: 'DialogController',
                controllerAs: 'modal',
                resolve: {
                    id:() => id
                },
                size: 'lg'
            })

           if (this.car) {
            this.$http.get('api/cars/' + this.car)
              .then((results) => {
                this.cars = results.data;
                console.log(results.data);
              }).catch((results) => {
                console.log('Could not retrieve cars');
              });
          }
        }
        public fetch() {
                if (this.search) {
                    this.$http.get('api/cars/search/' + this.search)
                        .then((results) => {
                            this.cars = results.data;
                        }).catch((results) => {
                            console.log('Could not retrieve cars');
                        });
                }
            //     else if(this.list) {
            //         this.$http.get('api/makes/search/' + this.list)
            //             .then((results) => {
            //                 this.makes = results.data;
            //             }).catch((results) => {
            //                 console.log('Could not retrieve cars');
            //             });
            // }

          }
          public getMake() {
                  if (this.search) {
                      this.$http.get('api/makes/search/' + this.search)
                          .then((results) => {
                              this.makes = results.data;
                          }).catch((results) => {
                              console.log('Could not retrieve makes');
                          });
                  }

            }
        constructor(private $uibModal: angular.ui.bootstrap.IModalService, private $http: ng.IHttpService) {}
    }

    angular.module('carapp1').controller('HomeController', HomeController);

    class DialogController {

        public ok() {
            this.$uibModalInstance.close();
        }

        constructor(public id: number, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
    }

    angular.module('carapp1').controller('DialogController', DialogController);

  }
