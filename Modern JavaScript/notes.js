const sumTwo = (n1, n2) => n1 + n2
// Is equivalent to 
function sumTwo(n1, n2) {
    return n1 + n2;
}


// Examples of closure: 

function createCounter() {
    let counter = 0;
    return function() {
        counter = counter + 1;
        return counter;
        }
    }

const increment = createCounter();
increment(); // "1"
increment(); // "2"


function createMultiplier(n1) {
    return function multiply(n2) {
        return n1 * n2;
    }
}

const multiplyByTwo = createMultiplier(2);
multiplyByTwo(3); // "6"
multiplyByTwo(4); // "8"

// End of closures

// Callbacks:

function callApi(url, callback) {
    // some code to fetch data from {url}
    callback(data);
}

function onSuccess(data) {
    // do something with data
}
    
callApi('http://some-api/v1', onSuccess);

// End of callbacks
    
    