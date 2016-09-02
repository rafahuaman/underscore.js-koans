describe("Underscore Utility functions", function() {
 
  it("_.template compiles JavaScript templates into functions that can be evaluated for rendering", function() {
    // internet says this is the important Utilities function of _.js - http://underscorejs.org/#template
    var websites =   { site: 'GitHub' }, template = 'Welcome to <%= site %>';
 
    var compiled = _.template(template,websites);
    
    expect(compiled).toEqual(__);

  });

  it("_.times invokes the given iteratee function n times and is called with an index argument", function() {
    // silly implementation, but shows oop in js http://underscorejs.org/#times >> http://underscorejs.org/#oop
    var numbers = [1,2], nextNumber;
    var addNextNumber = function() { 
      nextNumber = numbers.length + 1;
      numbers.push(nextNumber);
    };

    _(3).times(addNextNumber);

    expect(__).toEqual(numbers);
  });

  it("_.mixin should allow you to extend Underscore with your own utility functions", function() {
    // {name: function}
    var badName = "jimmy", goodName;
    
    _.mixin(
      { 
        capitalize: function(string) {
                return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()}
      });
    
    goodName = _(badName).capitalize()

    expect(__).toEqual(badName);
    expect(__).toEqual(goodName);
  });

  it("_.escape should escape characters in a string for insertion into HTML", function() {
    var data = "Two is > One, but < Three. One & Two = Three", escaped;
    escaped = _.escape(data);

    expect(__).toEqual(escaped);
  });
  
  it("_.unescape should unescape characters in a string to increase readability", function() {
    var data = "Two is &gt; One, but &lt; Three. One &amp; Two = Three", unescaped;
    unescaped = _.unescape(data);

    expect(__).toEqual(unescaped);
  });
  
  it("_.result should return the value of a named property or function", function() {
    var food = { temp: 'hot', flavor: 'sweet', respond: function() { return "Yum!"} };
    
    var foodTemp = _.result(food,'temp');
    var foodFlavor = _.result(food,'shape');
    var foodRespond = _.result(food,'respond');

    expect(__).toEqual(foodTemp);
    expect(__).toEqual(foodFlavor);
    expect(__).toEqual(foodRespond);
  });
  
});


