// var Parent = function() {
//   this.name = "Parent";
//   this.foo = "bar";
//   this.baz = true;
// };

// var Child = function() {
//   this.name = "Child";
//   this.bam = false;
// };


//   Create a new instance of the Parent function and set
//   it as the prototype of child. This set up a prototype
//   chain as follows.

//   Child ---> Parent ---> Object
 
// Child.prototype = new Parent();



// orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr



// /*
//   A basic animal function
// */
// function Animal () {
//   this.family = "animal";
//   console.log(this);
// }

// /*
//   Explain why just calling Animal() here causes the 
//   console.log(this) above to output the Window object.
//   First introduction to call sites in JavaScript.
//  */
// Animal();

// /*
//   So now we create a `new` Animal object and then 
//   afterwards, JavaScript lets you add another property.
//   Clearly explain how creating a new object based on 
//   a function changes the value of `this`.

//   Animal ---> Object
//  */
// var salamander = new Animal();
// salamander.property = "slimy";
// console.log('salamander',salamander);


//   Create another animal object and give it the same 
//   property, but with a different value.

//   Notice that the properties show when we log the new 
//   objects we created, but not on the Animal object itself.
//   It shows that we are creating new instances of the 
//   Animal function, not sharing it between salamander 
//   and kangaroo. 
  
// var kangaroo = new Animal();
// kangaroo.property = "jumpy";
// console.log('kangaroo', kangaroo);

// /*
//   Now prototypes. We declare a new function and set its 
//   prototype to Animal. This will combine species (which 
//   is set on this object) and the family property (which 
//   is set on the prototype) and puts them both on Doge
//  */
// function Doge () {
//   this.species = "Doge";
// }
// Doge.prototype = new Animal();

// /*
//   View the output of the console log below and make sure 
//   you expand the __proto__ object on it to see that family 
//   is inherited from the prototype.

//   Doge ---> Animal ---> Object
//  */
// var doge = new Doge();
// console.log('doge',doge);


// /*
//   More inheritance. We set the prototype of the Angus 
//   function to Doge.

//   Angus ---> Doge ---> Animal ---> Object
//  */
// function Angus () {
//   this.name = "Angus";
// }
// Angus.prototype = new Doge();

// var angus = new Angus();
// console.log('angus',angus);




/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

var Make = function() {
  this.makeName = "Honda";
  console.log(this);
}

/*
Create a function, Model, to hold the 
corresponding property and value
*/

function Model () {
  this.modelName = "Fit";
  console.log(Model);
}

// define the prototype of a Model?
Model.prototype = new Make();
console.log(Model);

// Define a Car
var Car = function(carColor) {
  this.color = carColor;
}

// define the prototype of a Car?
Truck.prototype = new Model();

// Create the first car
var Dad = new Car("red");

// Create the second car
var Mom = new Car("blue");

// Create the third car
var Me = new Car("green");

console.log("Dad: ", Dad);
console.log("Mom: ", Mom);
console.log("Me: ", Me);

