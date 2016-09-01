describe("Underscore Utilities functions", function() {
 
  it("_.template compiles JavaScript templates into functions that can be evaluated for rendering", function() {
    var data =   { website: 'GitHub' }, template = 'Welcome to <%= site %>';
 
    var parsedTemplate = _.template(template,data);
    
    expect(parsedTemplate).toEqual(__);

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