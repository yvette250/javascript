




// Define a function to calculate the sum of two numbers
function add(a, b) {
    return a + b;
}

// Use apply to call the function with an array of arguments
let result = add.apply(null, [5, 7]);

console.log(result); // Output: 12






// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use apply to find the m
let maxNumber = Math.max.apply(null, numbers);

console.log(maxNumber); 








