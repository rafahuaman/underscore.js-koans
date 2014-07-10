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

  it("_.each accepts a context as a third argument", function() {
    var context = { total: 0 }, add; 
    add = function (item) { this.total += item; };
    _.each(collectionArray, add, context);

    expect(__).toEqual(context.total);
  });
  
  it("_.each shoud work with objects too", function() {
    var sum  = 0;
    _.each(collectionObject, function(item) {
      sum += item;
    });

    expect(__).toEqual(sum);
  });

  it("_.map should transform a collection and return a new array of values", function() {
    var newArray = _.map(collectionArray, function(item) { return item*10; });

    expect(__).toEqual(newArray);
    expect(__).toEqual(collectionArray);
  });

  it("_.map should accept a context as a third argument", function() {
    var context = { factor: 10 }, newArray;
    var multiply = function(item) { return item*this.factor; };
    newArray = _.map(collectionArray, multiply, context);

    expect(__).toEqual(newArray);
  });

  it("_.pluck should return an array of property values from an array of objects", function() {
    var numerals = [{roman: "I", arabic: "1"}, 
                        {roman: "II", arabic: "2"}, 
                        {roman: "III", arabic: "3"}], selection;
    selection = _.pluck(objectArray, "roman");
    
    expect(__).toEqual(selection);
  });

   it("_.every should return true if all members of a collection pass the criteria", function() {
    var multiplesOf100 = [100,200,300], 
      threshold = 50,
      result,
      isAboveThreshold = function (number) { return number > threshold; };
    result = _.every(multiplesOf100, isAboveThreshold );
    
    expect(__).toEqual(result);
  });

   it("_.every should return false if any member of a collection does not pass the criteria", function() {
    var multiplesOf10 = [10,20,30],
      threshold = 50,
      result,
      isAboveThreshold = function (number) { return number > threshold; };
    result = _.every(multiplesOf10, isAboveThreshold );
    
    expect(__).toEqual(result);
  });

   it("_.every accepts a context as a third argument", function() {
    var multiplesOf10 = [10,20,30],
      context = { threshold: 50 },
      result,
      isAboveThreshold = function (number) { return number > this.threshold; };
    result = _.every(multiplesOf10, isAboveThreshold, context );
    
    expect(__).toEqual(result);
  });
  
  
});

