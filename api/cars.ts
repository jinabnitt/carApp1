import express = require('express');
let router = express.Router();

var cars = [
        {
            id: 1,
            ShortDescription: "Green MINI Cooper S",
            FullDescription : "This MINI Cooper S is great for the city.",
            Make : "Mini Cooper",
            Price : 30000,
            ImageUrl : "https://netlogx.com/wp-content/uploads/2012/09/british-racing-green-mini-cooper-s-small1.jpg"
        },
        {
            id: 2,
            ShortDescription : "Orange MINI Cooper S",
            FullDescription : "Orange is an odd color for a car.",
            Make : "Mini Cooper",
            Price : 25000,
            ImageUrl : "https://s-media-cache-ak0.pinimg.com/736x/7d/d3/fc/7dd3fcdea71950a3d1c9c50b3522d488.jpg"
        },
        {
            id: 3,
            ShortDescription : "Black MINI Cooper Countryman",
            FullDescription : "Holds more people than a normal MINI cooper and it is invisible at night.",
            Make : "Mini Cooper",
            Price : 45000,
            ImageUrl : "http://www.moibbk.com/images/mini-cooper-countryman-black-2.jpg"
        },
        {
            id: 4,
            ShortDescription : "Tesla Model S",
            FullDescription : "This red Tesla Model S has a 120 mile range.",
            Make : "Tesla",
            Price : 130000,
            ImageUrl : "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg"
        },
        {
            id: 5,
            ShortDescription : "Tesla Model X",
            FullDescription : "A Tesla Mini Van with Falcon Doors.",
            Make : "Tesla",
            Price : 150000,
            ImageUrl : "http://cdn.vrworld.com/wp-content/uploads/2015/09/tesla-model-x-concept-doors-open-rear-three-quarter.jpg"
        }
];

let carId = cars.length;

router.get('/cars', function (req, res, next) {
    res.json(cars);
});

router.get('/cars/:id', function (req, res, next) {
    let id = parseInt(req.params['id']);
    let car = findCar(id);
    if (car) {
        res.json(car);
    } else {
        res.sendStatus(404);
    }
});

/* Post to create or update car */
router.post('/cars', function(req, res, next) {
  let car = req.body;
  // update existing car
  if (car.id) {
    let original = findCar(car.id);
    original.Make = car.Make;
    original.Price = car.Price;
  // create new car
  } else {
    car.id = ++carId;
    cars.push(car);
  }
  res.sendStatus(200);
});

/* delete car by id */
router.delete('/cars/:id', function(req, res, next) {
  let id = parseInt(req.params['id']);
  if (!findCar(id)) {
    res.sendStatus(404);
  } else {
    cars = cars.filter((car)=> {
      return car.id != id;
    });
    res.sendStatus(200);
  }
});

/* find matching cars */
router.get('/cars/search/:search', function(req, res, next) {
    let search = req.params['search'];
    let matches = cars.filter((car)=>{
      return car.Make.indexOf(search) == 0;
    });
    res.json(matches);
});

function findCar(id:number) {
  let matches = cars.filter((car) => {
    return car.id == id;
  });
  return matches.length ? matches[0] : null;
}

export = router;
