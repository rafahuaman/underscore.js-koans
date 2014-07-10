describe("Underscore Array functions", function() {

  it("_.uniq should return a duplicate free array", function() {
    var arrayWithDups  = [1,2,1,3,4,2,5], result;
    result = _.uniq(arrayWithDups);

    expect(__).toEqual(result);
  });

  it("_.range should return range", function() {
    var units, tens, hundreds, negativeUnits;

    units = _.range(1,10);
    tens = _.range(10,100,10);
    hundreds = _.range(100,1000,100);
    negativeUnits = _.range(-1,-10,-1);

    expect(__).toEqual(units);
    expect(__).toEqual(tens);
    expect(__).toEqual(hundreds);
    expect(__).toEqual(negativeUnits);
  });

  it("_.intersection returns the common elements in two arrays ", function() {
    var multiplesOf2 = [2,4,6,8,10,12,14,16,18,20], 
      multiplesOf3 = [3,6,9,12,15,18,21], 
      multiplesOf6;

    multiplesOf6 = _.intersection(multiplesOf2,multiplesOf3);

    expect(__).toEqual(multiplesOf6);
  });



  
});

