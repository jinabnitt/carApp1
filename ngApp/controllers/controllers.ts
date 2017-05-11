namespace carapp1.Controllers {

  export class CarsController {
      public cars;
      public search;


      fetch() {
              if (this.search) {
                  this.$http.get('api/cars/search/' + this.search)
                      .then((results) => {
                          this.cars = results.data;
                      }).catch((results) => {
                          console.log('Could not retrieve cars');
                      });
              }
          }
          constructor(private $http: ng.IHttpService) {}
        }
      }
