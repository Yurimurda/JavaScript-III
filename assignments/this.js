/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. context in the window
* 2. context in the object
* 3. context of the instance 
* 4. self defined context
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var lovely = 'lumps';
function lady(){
    console.dir(this.lovely);
}

lady();     // <---- window, which "this." refers to


// Principle 2

// code example for Implicit Binding
const leftSide = {
    example: "Implicit",               
    example2: "Implicit2",
    rightSide(ofTheDot) { // "ofTheDot" is the function 
        console.log(this.example,ofTheDot)
        console.log(this.example2,ofTheDot)             //
    },
};

leftSide.rightSide("binding");

// Principle 3

// code example for New Binding
function Pizza(toppings){
    this.toppings = toppings;        
}
const Newpizza = new Pizza("olives")
console.log(Newpizza.toppings);
// Principle 4

// code example for Explicit Binding   || Order of Operation 
function hyena(){                       // The function comes first, "this" will reference the method from the variable we're calling from. 
    console.log(this.noise);
}

let myHyena ={                         // Variable and methods
    name: 'yeen',
    noise: 'lol'
}

hyena.call(myHyena);                   // "hyena" references the function above and calls the method from a variable specified in the parenthesis.