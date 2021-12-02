// Part 1
// maps out the input into an Array
const array = document.body.textContent.split('\n').map( x => parseInt(x) );
// next step is to count each time a value is bigger than the previous value
// initialise variables
let current;
let previous = array[0];
let larger = 0;
// check the whole array
for (let i = 0; i < array.length; i++) {
	current = array[i];
    console.log("comparing " + current + " with " + previous);
    if (i !== 0) {
        if (current > previous) {
            larger++;
            console.log("Increase found.");
        }
    }
    else { 
        console.log("Skipping comparison.");
    }
    previous = current;
    
}
console.log("value of larger: " + larger);

// check the first 10 only
for (let i = 0; i < 10; i++) {
	current = array[i];
    console.log("comparing " + current + " with " + previous);
    if (i !== 0) {
        if (current > previous) {
            larger++;
            console.log("Increase found.");
        }
    }
    else { 
        console.log("Skipping comparison.");
    }
    previous = current;
    
}
console.log("value of larger: " + larger);

// Part 2
const array = document.body.textContent.split('\n').map( x => parseInt(x) );
let windowSums = [];
let currentSum = 0;
// below incorrect. The blocks of 3 are not discrete but staggered.
/* for (let i = 0; i < array.length; i++) {
    if (avgsCollected < 3) {
        currentSum = currentSum + array[i]; 
        avgsCollected++;
    }
    else if (avgsCollected >= 3 && (array[i] !== array.length -1)) { 
        arrayOfAvgs.push(currentSum / 3);
        currentSum = array[i];
        avgsCollected = 1;
    }
    else {
        arrayOfAvgs.push(currentSum / 3);
        arrayOfAvgs.push(array[i]);
    }
    console.log("arrayOfAvgs: " + arrayOfAvgs + " and avgsCollected " + avgsCollected);
} */

// sliding window technique
function slidingWindow(arr, k) {
    // find initial sum of first k elements
    for (let n = 0; n < k; n++) {
        currentSum += arr[n];
        console.log(currentSum);
    }
    // iterate array once and increment the right edge 
    for (let i = k; i < arr.length; i++) {
        // push sum of the window to the windowSums array
        windowSums.push(currentSum);
        currentSum += arr[i] - arr[i-k];
        console.log(currentSum);
    }
    return windowSums;
}
slidingWindow(array, 3);

let current;
let previous = windowSums[0];
let larger = 0;
for (let i = 0; i < windowSums.length; i++) {
	current = windowSums[i];
    console.log("comparing " + current + " with " + previous);
    if (i !== 0) {
        if (current > previous) {
            larger++;
            console.log("Increase found.");
        }
    }
    else { 
        console.log("Skipping comparison.");
    }
    previous = current;
    
}
console.log("value of larger: " + larger);
