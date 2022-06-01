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


// same thing now via the Async/Await approach
// REVIEW THIS STUFF

async function myAsyncFunc() {
    try {
        console.log('1. start fetching the url...');
        const response = await fetch('url');
        console.log('3. data fetched!');
        const data = await response.json();
        console.log('4, here is the data: ', data);
    } catch (error) {
        console.log('Error: ', error);
    }
}