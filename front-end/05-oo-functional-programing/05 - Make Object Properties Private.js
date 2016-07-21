var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {
  // this is a private variable
  var gear = 0;

  // these are public methods
  this.setGear = function(value) {
    gear = value;
  };

  this.getGear = function() {
    return gear;
  };
};

var myCar = new Car();

var myBike = new Bike();