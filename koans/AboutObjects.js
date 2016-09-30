describe("Underscore Object functions", function() {

  it("_.keys should return an array with an object's keys", function() {
    var object  = { one: 1, two: 2, three: 3 }, keys;
    keys =_.keys(object);

    expect(__).toEqual(keys);
  });

//_.allKeys complains that it is not a function...it shouldn't - http://underscorejs.org/#allKeys
  // it("_.allKeys should return an array with an object's keys, both owned and inherited", function() {
  //   var allKeys;
    
  //   function Number(name, value) {
  //     this.name = name;
  //     this.value = value;
  //   };
    
  //   Number.prototype.realNumber = true;
    
  //   allKeys = _.allKeys(new Number("one", 1));

  //   expect(__).toEqual(allKeys);
  // });
  
  it("_.values should return an array with an object's values", function() {
    var object  = { one: 1, two: 2, three: 3 }, values;
    values =_.values(object);

    expect(__).toEqual(values);
  });

//_.mapObject complains that it is not a function...it shouldn't - http://underscorejs.org/#mapObject
  // it("_.mapObject should map an Object like _.map", function() {
  //   var addFive = function(value, key) { return value + 5};
  //   function Bounds (start, end) {
  //     this.start = start;
  //     this.end = end;
  //   };
    
  //   _.mapObject(Bounds(7,34), addFive(5));

  //   expect(__).toEqual(romans);
  // });

  it("_.defaults should populate undefined properties", function() {
    var romans = { two: "II" },
      defaults  = { one: 1, two: 2, three: 3 };
    _.defaults(romans, defaults);

    expect(__).toEqual(romans);
  });
  
  it("_.pairs should return lists with an object's key/value pairs", function() {
    var object  = { one: 1, two: 2, three: 3 }, values;
    values =_.values(object);

    expect(__).toEqual(values);
  });  
  
});

