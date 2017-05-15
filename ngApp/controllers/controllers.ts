namespace carapp1.Controllers {

  export class CarsController {
      public cars;
      public search;
      public list;

      fetch() {
              if (this.search) {
                  this.$http.get('api/cars/search/' + this.search)
                      .then((results) => {
                          this.cars = results.data;
                      }).catch((results) => {
                          console.log('Could not retrieve cars');
                      });
              } else if(this.list) {
                  this.$http.get('api/cars/search/' + this.list)
                      .then((results) => {
                          this.cars = results.data;
                      }).catch((results) => {
                          console.log('Could not retrieve cars');
                      });
          }
        }

          constructor(private $http: ng.IHttpService) {}
        }
    //     export class HomeController {
    //
    //     public showModal(ShortDescription: string) {
    //         this.$uibModal.open({
    //             templateUrl: 'ngApp/modal.html',
    //             controller: 'DialogController',
    //             controllerAs: 'modal',
    //             resolve: {
    //                 ShortDescription: () => ShortDescription
    //             },
    //             size: 'sm'
    //         });
    //     }
    //
    //     constructor(private $uibModal: angular.ui.bootstrap.IModalService) { }
    // }
    //
    // angular.module('carapp1').controller('HomeController', HomeController);
    //
    // class DialogController {
    //
    //     public ok() {
    //         this.$uibModalInstance.close();
    //     }
    //
    //     constructor(public ShortDescription: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
    // }
    //
    // angular.module('carapp1').controller('DialogController', DialogController);
      }
