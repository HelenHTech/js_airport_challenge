describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    // weather = new Weather();
  });

  it("Land a plane", function() {
    expect(airport.airport_store(plane)).toInclude(plane);
  });

  // it("Take off plane", function() {
  //   expect(airport.airport_store.length.toEqual(0);
  // });

  // it("Default airport capacity", function() {
  //   expect(airport.capacity).toEqual(5);
  // });

  // it("Prevent landing plane when airport is full", function() {
  //   airport.land_plane(plane)
  //   airport.land_plane(plane)
  //   airport.land_plane(plane)
  //   airport.land_plane(plane)
  //   expect( function(){ airport.land_plane(plane); } ).toThrow(new Error("Airport is full"));
  // });

  // it("Prevent Take off plane if stormy weather", function() {
  //   expect(airport.airport_store(plane)).toInclude(plane);
  // });

  // it("Prevent landing plane if stormy weather", function() {
  //   expect(airport.airport_store(plane)).toNotInclude(plane);
  // });

});
