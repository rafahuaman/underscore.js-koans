describe("Underscore Function functions", function() {
 
  it("_.bind binds a context/object to a function", function() {
    var sayHi = function(){ return this.morning ; }, 
      greetings = { morning: 'Good morning!' };
    sayHi = _.bind(sayHi, greetings);

    expect(__).toEqual(sayHi());
  });

  it("_.bind can also bind arguments", function() {
    var sayHi = function(timeOfDay, name){ 
        return this.beginning + " " + timeOfDay + ", " + name + this.end ; 
      }, 
      greetings = { beginning: "Good", end: "!" };
    sayHi = _.bind(sayHi, greetings, "evening", "John");
    
    expect(__).toEqual(sayHi());
  });
  
  
});

