/* When functions are assigned to the porperties of an object, we call
them methods. All JavaScript obkects (including arrays)
have methods */
let a = []; // Creates an empty array
a.push(1,2,3); // Push elements into array; Example of a method containd in the array object
a.reverse // Reverse the array; Example of a method contained in array object

// Using the 'this' keyword we can define our own methods

let points = [
    {x: 50, y: 0},
    {x: 0, y: 10}
];

points.dist = function(){  // Compute the distance between the two points
    let p1 = this[0];
    let p2 = this[1];

    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b)
};

function abs(x){
    if (x >= 0) // Single line if statements are allowed
        return x;
    else
        return -x;
}

abs(-10) === abs(10) // => true

function sum(arr){

    let sum = 0;
    for (let x of arr){ // Loop over arr, during each execution the arr index can be accessed as x
        sum +=x;
    }
    return sum;
}

function factorial(n){ // A function to compute factorials
    let prod = 1;
    while (n>1){
        product *= n; // multiply product by n
        n--; // Decrement n
    }
    return prod;
} 

function diffFactorial(n){

    let i, product = 1;
    for (i = 2; i <= n; i++) // Basically skips 1*1?
        product *= i;
    return product;
}