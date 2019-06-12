function Airport() {
  this._airport_store = [];
  this._capacity = 5;
}

// function Weather() {
//   this._weather = Math.floor(Math.random() * 6) + 1;
// }

Airport.prototype.land_plane = function(plane) {
  this._aiport_store.push(plane)
}

// Airport.prototype.take_off = function(plane) {
//   this._aiport_store.pop(plane)
// }

// Airport.prototype.full = function() {
//   airport_store.length >= this._capacity ? true : false
// }

// Weather.prototype.state_of_weather = function() {
//   weather > 5 ? "stormy" : "sunny"
// }

// Test add sheep
var airport = new Airport();
airport.land_plane(plane);

// Print list_sheep, which maps the sheep name to the sheep in the array
console.log("Plan landed", airport.land_plane());