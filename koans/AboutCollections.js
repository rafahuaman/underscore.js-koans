describe("Underscore Collection functions", function() {
  var collectionArray,  collectionObject;

  beforeEach(function() {
    collectionArray = [1, 2, 3];
    collectionObject = {one: 1, two: 2, three: 3};
  });

  it("should iterate with _.each", function() {
    var sum  = 0;
    _.each(collectionArray, function(item) {
      sum += item;
    });

    expect(__).toEqual(sum);
  });
  
});
