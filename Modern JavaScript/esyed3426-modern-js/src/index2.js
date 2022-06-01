// Functions

function greet(msg = 'Hello world') {
    // code goes here
    console.log(msg);
}

greet();

let myFunc = (msg) => {
    console.log(msg);
};

let myFunc2 = (msg) => console.log(msg);

//myFunc('hello') 


// ... is the "rest" operator or a "collector"
const myFunc3 = (msg, ...rest) => {
    console.log(msg);
    console.log(rest);
}

myFunc3("Hi there", 5, 6, 7);

// Arrays 
const myArr = [5, 6, 7, 'hello', myFunc3]
const myArr2 = [...myArr, 8, 9]



const myArr5 = [1, 2, 3];

for (item of myArr5) {
    console.log(item);
}

// declarative array functions
const scores = [45, 78, 90, 99];

// lets get scores above 50pts
const passingScores = scores.filter(x => x >= 50);

//filter filters out all of the elements that do no meet the precondition



// map does an operation on each element of an array
const bellCurvedScores = scores.map(x => x + 10);


class Square {
    constructor(length) {
        this.length = length;
        this.width = length;
    }
    area () {
        return this.length * this.width
    }
    get area2() {
        return this.length * this.width
    }
}

const mySquare = new Square(5);



class Cube extends Square {
    constructor(length) {
        super(length);
        this.height = length;
    }

    volume () {
        return this.height * this.width * this.length;
    }
}

const myCube = new Cube(5);

console.log(myCube.volume());