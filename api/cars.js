"use strict";
var express = require("express");
var router = express.Router();
var cars = [
    {
        id: 1,
        make: "Mini Cooper",
        name: "Green MINI Cooper S",
        FullDescription: "This MINI Cooper S is great for the city.",
        Price: 30000,
        ImageUrl: "https://netlogx.com/wp-content/uploads/2012/09/british-racing-green-mini-cooper-s-small1.jpg"
    },
    {
        id: 2,
        make: "Mini Cooper",
        name: "Orange MINI Cooper S",
        FullDescription: "Orange is an odd color for a car.",
        Price: 25000,
        ImageUrl: "https://s-media-cache-ak0.pinimg.com/736x/7d/d3/fc/7dd3fcdea71950a3d1c9c50b3522d488.jpg"
    },
    {
        id: 3,
        make: "Mini Cooper",
        name: "Black MINI Cooper Countryman",
        FullDescription: "Holds more people than a normal MINI cooper and it is invisible at night.",
        Price: 45000,
        ImageUrl: "http://www.moibbk.com/images/mini-cooper-countryman-black-2.jpg"
    },
    {
        id: 4,
        make: "Tesla",
        name: "Tesla Model S",
        FullDescription: "This red Tesla Model S has a 120 mile range.",
        Price: 130000,
        ImageUrl: "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg"
    },
    {
        id: 5,
        make: "Tesla",
        name: "Tesla Model X",
        FullDescription: "A Tesla Mini Van with Falcon Doors.",
        Price: 150000,
        ImageUrl: "http://cdn.vrworld.com/wp-content/uploads/2015/09/tesla-model-x-concept-doors-open-rear-three-quarter.jpg"
    }
];
router.get('/cars', function (req, res, next) {
    res.json(cars);
});
router.get('/cars/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    var car = findCar(id);
    if (car) {
        res.json(car);
    }
    else {
        res.sendStatus(404);
    }
});
function findCar(id) {
    var matches = cars.filter(function (car) {
        return car.id == id;
    });
    return matches.length ? matches[0] : null;
}
module.exports = router;