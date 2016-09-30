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
  
  it("_.reduce should reduce a list of values into a single value", function() {
    var array = [1,2,3],
    reduced;

    reduced = _.reduce(array, function(memo,num) {return memo + num});
    
    expect(__).toEqual(reducedArray);
  });  
  
  it("_.reduceRight should reduce a list of values into a single value, but from the right", function() {
    var array = [[0, 1], [2, 3], [4, 5]],
    reducedFromRight;
    
    reducedFromRight = _.reduceRight(array, function(a, b) { return a.concat(b); }, []);

    expect(__).toEqual(reducedFromRight);
  });   
  
  it("_.find should return the first value", function() {
    var array = array,
    result;
    
    result = _.function(array, function(a, b) { return a.concat(b); }, []);

    expect(__).toEqual(result);
  });  
  
  it("_.filter should return an array of values from array that pass the predicate", function() {
    var array = [1,2,3,4,5,6], 
        oddNums = function(num) { return num % 2 !== 0 },
        newArray;

    newArray = _.filter(array, oddNums);
     
    expect(__).toEqual(newArray);
  });
    
  it("_.reject should return entries that DO NOT match the predicate", function() {
    var array = [1,2,3,4,5,6],
        notEven = function(num) { return num % 2 === 0 },
        newArray;
    
    newArray = _.reject(array, notEven);
     
    expect().toEqual(newArray);
  });

  it("_.where should return an array with entries that match key-value pair parameter", function() {
    var numerals = [{roman: "I", arabic: "1", digits: "single"}, 
                    {roman: "II", arabic: "2", digits: "single"}, 
                    {roman: "XIII", arabic: "13", digits: "double"}], 
                    newArray;
     
    newArray = _.where(numerals, {digits: "single"});
     
    expect(__).toEqual(newArray);
  });  
  
  it("_.findWhere should return the first entry that matches key-value pair parameter", function() {
    var numerals = [{roman: "I", arabic: "1", digits: "single"}, 
                    {roman: "II", arabic: "2", digits: "single"}, 
                    {roman: "XIII", arabic: "13", digits: "double"}], 
                    newArray;
     
    newArray = _.findWhere(numerals,{digits: "double"});
     
    expect(__).toEqual(newArray);
  });  

  it("_.pluck should return an array of property values from an array of objects", function() {
    var numerals = [{roman: "I", arabic: "1", digits: "single"}, 
                    {roman: "II", arabic: "2", digits: "single"}, 
                    {roman: "XIII", arabic: "13", digits: "double"}],
                    selection;
                    
    selection = _.pluck(numerals, "roman");
    
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
  
  it("_.some should return true if any entries pass the predicate", function() {
    var multiplesOf10 = [10,20,30],
      result,
      isAboveThreshold = function (number) { return number > 25; };
    result = _.some(multiplesOf10, isAboveThreshold);
    
    expect(__).toEqual(result);
  });  
  
  it("_.some accepts a context as a third argument", function() {
    var multiplesOf10 = [10,20,30],
      context = { threshold: 50 },
      result,
      isAboveThreshold = function (number) { return number > this.threshold; };
    result = _.some(multiplesOf10, isAboveThreshold, context );
    
    expect(__).toEqual(result);
  });    
  
  it("_.contains should return true if the value is present in the list", function() {
    var multiplesOf10 = [10,20,30],
      value = 30,
      result;
      
    result = _.some(multiplesOf10, value);
    
    expect(__).toEqual(result);
  });  
  
  it("_.min & _.max should the min and max values, respectively", function() {
    var array = [10,40,62,17,77,20,30],
      minValue,
      maxValue;
      
    minValue = _.min(array);
    maxValue = _.max(array);
    
    expect(__).toEqual(minValue);
    expect(__).toEqual(maxValue);
  }); 
  
  it("_.min & _.max should return infinity for 'empty' lists", function() {
    var numerals = [{roman: "I", arabic: "1", digits: "single"}, 
                    {roman: "II", arabic: "2", digits: "single"}, 
                    {roman: "XIII", arabic: "13", digits: "double"}],
        minValue,
        maxValue;
                    
    minValue = _.min(numerals);
    maxValue = _.max(numerals);  
    
    expect(__).toEqual(minValue);
    expect(__).toEqual(maxValue);    
  });   
  
  it("_.min & _.max should return props as well", function() {
    var numerals = [{roman: "I", arabic: 1, digits: "single"}, 
                    {roman: "II", arabic: 2, digits: "single"}, 
                    {roman: "XIII", arabic: 13, digits: "double"}],
        arabic = function (numeral) { return numeral.arabic; },            
        minValue,
        maxValue;
                    
    minValue = _.min(numerals,arabic);
    maxValue = _.max(numerals,arabic);  
    
    expect(__).toEqual(minValue);
    expect(__).toEqual(maxValue);    
  }); 
  
  it("_.sortBy should return a (stably) sorted copy of a list based on the iteratee", function() {
        var array = ["14320","402","633332","1127","747","2","30"],        
        numerals = [{roman: "IX", arabic: 11, digits: "double"}, 
                    {roman: "II", arabic: 2, digits: "single"}, 
                    {roman: "III", arabic: 3, digits: "single"}],
        newArray,
        sortedNumerals;
                    
    newArray = _.sortBy(array, function(num) { return num.length});
    sortedNumerals = _.sortBy(numerals,'arabic');
    
    expect(__).toEqual(newArray);
    expect(__).toEqual(sortedNumerals);
  });   

  it("_.groupBy should split list elements into groups and return a count:array", function() {
        var array = ["1432","402","633332","1127","747","2","30"],        
        numerals = [{roman: "IX", arabic: 11, digits: "double"}, 
                    {roman: "II", arabic: 2, digits: "single"}, 
                    {roman: "III", arabic: 3, digits: "single"}],
        newArray,
        groupedByNumeral,
        groupedByDigits;
                    
    newArray = _.groupBy(array, function(num) { return num.length });
    groupedByNumeral = _.groupBy(numerals,'roman');
    groupedByDigits = _.groupBy(numerals, function(num) { return num.digits });
    
    expect(__).toEqual(newArray);
    expect(__).toEqual(groupedByNumeral);
    expect(__).toEqual(groupedByDigits);
  });   
  
  it("_.indexBy should split list elements into groups and return key:array", function() {
        var array = ["14320","633332","1127","747","2","30"],        
        numerals = [{roman: "IX", arabic: 11, digits: "double"}, 
                    {roman: "II", arabic: 2, digits: "single"}, 
                    {roman: "III", arabic: 3, digits: "single"}],
        newArray,
        indexedNumerals,
        indexedDigits;
                    
    newArray = _.indexBy(array, function(num) { return num.length });
    groupedByNumeral = _.indexBy(numerals,'roman');
    groupedByDigits = _.indexBy(numerals, function(num) { return num.digits });
    
    expect(__).toEqual(newArray);
    expect(__).toEqual(groupedByNumeral);
    expect(__).toEqual(groupedByDigits);
  });     
  
  it("_.countBy should return a count of objects in each group", function() {
    var array = [1,2,3,4,5,6,7],
      isEven = function(num) { return num % 2 === 0 ? 'even': 'odd'},
      result;
      
    result = _.countBy(array, isEven);
    
    expect(__).toEqual(result);
  });    
  
});

