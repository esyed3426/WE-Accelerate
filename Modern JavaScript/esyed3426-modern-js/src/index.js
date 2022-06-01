//console.log(a)
// Basically a print statement


// Declaring variables are of the form:
// <<var keyword>> <<variableName>> = <<value>>;

// Because variables in js are dynamically typed, we can change their types. 


// js does not have strong typing
// TypeScript is a strongly typed version of JavaScript

/* Issues with the var keyword: 
    Variables can be used before they are declared (Hoisting)
    Does not respect block-scope
*/

// Hoisting

var a = 5;
if (true) {
    var a = "hello world\n";
}
console.log(a);

// What it looks like during interpretation

var a;
var a = 5;
if (true) {
    a = "hello world\n";
}
console.log(a); 

// new keywords for declaring variabels are: let, const

let b = 6
if (true) {
    let b = "hello world\n"
}

console.log(b);


// For unchanging values, we use const, otherwise, use let.


// Objects: More complex types
// A package that holds multiple fields

const rectangle = {
    width: 5,
    height: 5,
};

// Accessing fields

// Dot notation
console.log(rectangle.width)

// bracket notation (Part of modern js)
console.log(rectangle['height'])

// bracket notation is useful when you don't know what the name of the property is
// with bracket notation, you could dynamically create that property using a variable or something like that
const thingIWant = "height";
console.log(rectangle[thingIWant])

const cube = {
    ... rectangle, 
    length: 5,
};

// This takes the properties of the rectangle, the width and height, and adds them and their initializations into the current object

console.log(cube)


// Now, changing cube2 also changes cube

// How to shallow copy an object

const cube2 = {
    ...cube,
}
