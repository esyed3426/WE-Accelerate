// Asynchronous code in JavaScript
import fetch from 'node-fetch'

const cutTheGrass = new Promise((resolve, reject) => {
    // resolve is a reference to a function to call when the promise is successful
    // reject is a reference to a function to call when the promise is unsuccessful

    // does the asynchronous work
    // ... 

    //setTimeout(() => resolve("Grass is cut"), 1000);
    reject("It's raining");
})

cutTheGrass.then(
    (status) => console.log(status) , 
    (err) => console.error(err)
);

cutTheGrass
    .then((status) => console.log(status))
    .catch((err) => console.error(err));

console.log(cutTheGrass)

const myFetchPromise = fetch('https://google.ca');
myFetchPromise
    .then((response) => response.blob())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));


// REVIEW PROMISES, AWAIT AND ASYNC FUNCTIONS, CALLBACKS