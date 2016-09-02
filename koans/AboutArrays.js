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

  it("_.object should convert an array into an object", function() {
    var numbers = [1, 2, 3], 
        parity = ['odd', 'even', 'even'], 
        newArray; 
    
    newArray = _.object(numbers, parity);

    expect(__).toEqual(newArray);
  });  

  it("_.intersection returns the common elements in two arrays ", function() {
    var multiplesOf2 = [2,4,6,8,10,12,14,16,18,20], 
      multiplesOf3 = [3,6,9,12,15,18,21], 
      multiplesOf6;

    multiplesOf6 = _.intersection(multiplesOf2,multiplesOf3);

    expect(__).toEqual(multiplesOf6);
  });

  it("_.initial should return everything but the last entry in an array", function() {
    var array = [1,2,3,4,5], newArray;
    
    newArray = _.initial(array);
    
    expect(__).toEqual(newArray);
  });

  it("_.last should return only the last entry in an array", function() {
    var array = [1,2,3,4,5], newArray;
    
    newArray = _.last(array);
    
    expect(__).toEqual(newArray);
  });
  
  it("_.rest should return everything but the first entry in an array", function() {
    var array = [1,2,3,4,5], newArray;
    
    newArray = _.rest(array);
    
    expect(__).toEqual(newArray);
  });  
  
  it("_.compact should return a new array without falsey values", function() {
    var array = [0, 1, false, 2, '', 3], newArray;
    
    newArray = _.compact(array);
    
    expect(__).toEqual(newArray);
  });        
    
  it("_.without should return a new array without the specified values", function() {
    var array = [1, 2, 1, 0, 3, 1, 4], newArray, emptyArray, arrayArray;
    
    newArray = _.without(array, 0, 1);
    emptyArray = _.without(array, 0, 1, 2, 3, 4);
    arrayArray = _.without(array, arrayArray);
    
    expect(__).toEqual(newArray);
    expect(__).toEqual(emptyArray);
  });  
  
  it("_.union should return a values present in compared arrays", function() {
    // 
    var array = ([1, 2, 3], [101, 2, 1, 10], [2, 1]), newArray;
    
    newArray = _.union(array);

    expect(__).toEqual(newArray);
  });

  it("_.difference should return values not present in compared arrays", function() {
    var array1 = [1, 2, 3], 
        array2 = [101, 2, 1, 10], 
        newArray;
    
    newArray = _.difference(array1,array2);

    expect(__).toEqual(newArray);
  });

  it("_.zip should merge arrays to corresponding values", function() {
    var numbers = [1, 2, 3],
        parity = ['odd', 'even', 'even'],
        compare = [true, true, false],
        newArray; 
    
    newArray = _.zip(numbers, parity, compare);

    expect(__).toEqual(newArray);
  });

//_.unzip complains that it is not a function...it shouldn't - http://underscorejs.org/#unzip
  // it("_.unzip should unmerge arrays at corresponding values ", function() {
  //   var array1 = [1,"odd",true],
  //       array2 = [2,"even",true],
  //       array3 = [3,"even",false], 
  //       newArray;
  
  //   newArray = _.unzip(array1,array2,array3);
    
  //   expect(__).toEqual(newArray);
  // });
  
  it("_.index* should do various functions using index", function() {
    var array = [1,4,16,4,1,7,8,4,22],
        indexOf,
        lastIndexOf,
        findIndex;

    indexOf = _.indexOf(array,4);
    lastIndexOf = _.lastIndexOf(array,4);
    //findIndex = _.findIndex(array,7); //complains that it is not a function...it shouldn't - http://underscorejs.org/#findIndex
    

    expect(__).toEqual(indexOf);
    expect(__).toEqual(lastIndexOf);
    //expect(__).toEqual(findIndex);
  });
  
  it("_.sortedIndex should return the index where the value should be inserted to keep the list sorted", function() {
    var array = [1,2,4,5], sortedIndex;
    
    sortedIndex = _.sortedIndex(array,3);
    
    expect(__).toEqual(sortedIndex);
    
    var beatles = [{'mate': 1111, 'pos': 'D', 'name': 'Starr'},
                   {'mate': 1112, 'pos': 'LG', 'name': 'Harrison'},
                   {'mate': 1114, 'pos': 'B', 'name': 'McCartney'}];
     
    sortInBeatles = _.sortedIndex(beatles, {'mate': 1113, 'pos': 'RG', 'name': 'Lennon'}, 'mate');
    
    expect(__).toEqual(sortInBeatles);
  });

//_.findLastIndex complains that it is not a function...it shouldn't - http://underscorejs.org/#findLastIndex  
  // it("_.findLastIndex should iterate from the last value to find the last index of that value", function() {
  //   var array = [1,2,3,4,2,4,1,3,3,4,5], findLastIndex;
    
  //   findLastIndex = _.findLastIndex(array,4);
    
  //   expect(__).toEqual(findLastIndex);
    
  //   var beatles = [{'mate': 1111, 'pos': 'D', 'name': 'Starr'},
  //                 {'mate': 1112, 'pos': 'LG', 'name': 'Harrison'},
  //                 {'mate': 1113, 'pos': 'RG', 'name': 'Lennon'},
  //                 {'mate': 1114, 'pos': 'B', 'name': 'McCartney'}]
  //       mate,
  //       pos,
  //       name;
     
  //   mate = _.findLastIndex(beatles, { mate: 1113 });
  //   pos = _.findLastIndex(beatles, { pos: 'LG' });
  //   name = _.findLastIndex(beatles, { name: 'McCartney' });
    
  //   expect(__).toEqual(mate);
  //   expect(__).toEqual(pos);
  //   expect(__).toEqual(name);
  // });
});

