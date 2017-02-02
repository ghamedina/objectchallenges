// Story 1 Car Object Creator: function that returns car info

function carCreator(make, modelYear, color) {
  return {
    make: make,
    modelYear: modelYear,
    color: color,
    carInfo: function() { return this.make + " " + this.modelYear + " " + this.color }
  };
}

// Story 2

function carCreator(make, modelYear, color) {
  var speed = 60;
  return {
    make: make,
    modelYear: modelYear,
    color: color,
    carInfo: function() { return this.make + " " + this.modelYear + " " + this.color },
    getSpeed: function() { return speed; },
    accelerate: function() { speed = speed + 10;},
    brake: function() { speed = speed - 7;}
  };
}

// Story 3

function carCreator(make, modelYear, color) {
  var speed = 0;
  return {
    make: make,
    modelYear: modelYear,
    color: color,
    carInfo: function() { return this.make + " " + this.modelYear + " " + this.color },
    getSpeed: function() { return speed; },
    accelerate: function() { speed++;},
    brake: function() { if (speed > 0) {speed--;}}
  };
}

var car2 = carCreator("Chevy", "2005", "Black");

while (car2.getSpeed() < 50) {
  car2.accelerate();
}

while (car2.getSpeed() < 70) {
  car2.accelerate();
}

while (car2.getSpeed() > 0) {
  car2.brake()
}

// Story 4


function carCreator(make, modelYear, color) {
  var speed = 0;
  return {
    make: make,
    modelYear: modelYear,
    color: color,
    carInfo: function() { return this.make + " " + this.modelYear + " " + this.color },
    getSpeed: function() { return speed; },
    accelerate: function() { if (85 - speed < 80) { speed++;} else {speed = speed + 80; }},
    brake: function() { if (speed > 0) {speed--;}}
  };
}

while (car2.getSpeed() < 85) {
  car2.accelerate();
}

// Story 5

//
function carCreator(make, modelYear, color) {
  var speed = 0;
  return {
    make: make,
    modelYear: modelYear,
    color: color,
    carInfo: function() { return this.make + " " + this.modelYear + " " + this.color },
    getSpeed: function() { return speed; },
    accelerate: function() { speed++;},
    brake: function() { if (speed > 0) {speed = speed - Math.ceil(Math.random() * (speed / 2));}} //=> this says take down the current speed by a max of half of current speed, could also be zero
  };
}
// used Math.random function to generate a random number between 0 and 1 (inclusive) -
