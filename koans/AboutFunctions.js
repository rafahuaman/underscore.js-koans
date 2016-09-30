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
  
  it("_.bindAll help bind multiple helper functions", function() {
    var buttonView = {
      label  : 'button',
      onClick: function(x) { return x + 2 },
      // onClick: function() { alert('clicked: ' + this.label); },
      onHover: function() { console.log('hovering: ' + this.label); }
      };
      
    _.bindAll(buttonView, 'onClick', 'onHover');
    
    // When the button is clicked, this.label will have the correct value.
    //jQuery('#underscore_button').on('click', buttonView.onClick);  
    
    expect(__).toEqual(buttonView.onClick(3));
  });  
  
  it("_.partial should apply a funciton with n args and not affect this.value", function() {
    var plus = function(x,y) { return x + y; },
    
    plusOne = _.partial(plus, 1),
    // Can pass a placeholder in the args for on-call
    plusFive = _.partial(plus, _, 67);

    expect(__).toEqual(plusOne(22));
    expect(__).toEqual(plusFive(5));
  }); 
  
  it("_.memoize should speed up function execution by using a cached result", function() {
    // Resource - http://underscorejs.org/#memoize
    var fibonacci = _.memoize(function(n) {
      return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
    });
    
    expect(__).toEqual(fibonacci(7));
  }); 

  it("_.delay should wait to call a function based on time arg", function() {
    var thought = 5000,
    rationalThought = 60000,
    politicalView = function() { alert( "blah blah blah" ); },
    speak;
    
    if (thought < rationalThought) {
      speak = "Let me think about that.";
      thought = rationalThought;

    } else {       
      speak = _.delay(politicalView, thought);
    };

    expect(__).toEqual(speak);
  }); 
  
  it("_.wrap should wrap the function inside the wrapper funciton and pass it as the first arg", function() {
    var sayHi = function(name) { return "Hi, " + name; },
    sayAloha = function() { return "Hi, " + name + ". Bye, " + name; },
    name = "Jimmy";
    
    sayHi = _.wrap(sayHi, function(func) {
      return "Before >> " + func(name) + " << After";
    });
    
    sayAloha = _.wrap(sayHi, sayAloha);    
    
    expect(__).toEqual(sayHi());
    expect(__).toEqual(sayAloha());
  });
  
  //Try both before you give up...
  it("_.compose should return the composition of a list of functions, each taking the return of the next.", function() {
    var acquaintance = "Jimmy",
    sayHi = function(name) { return "Hi, " + name; },
    sayBye = function(pleasantry) { return pleasantry + " Bye."; },
    sayPleasantry = function(hello) { return hello + ". Long time, no see!"; },
    passbyGreeting = _.compose(sayHi,sayPleasantry,sayBye);

    expect(__).toEqual(passbyGreeting(acquaintance));
  
    //"...One thing to note is that the functions are run in reverse or to which ther are passed..."
    //http://chrislaughlin.github.io/2015/05/31/underscorejs-compose.html
    var otherAcquaintance = "Johnny",
    sayHiAgain = function(name) { return "Hi, " + name; },
    sayPleasantryAgain = function(hello) { return hello + ". Long time, no see!"; },
    sayByeAgain = function(pleasantry) { return pleasantry + " Bye."; },
    passbyGreetingAgain = _.compose(sayHiAgain, sayByeAgain, sayPleasantryAgain);

    expect(__).toEqual(passbyGreetingAgain(otherAcquaintance));
    
  });

});

