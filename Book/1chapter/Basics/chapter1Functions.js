/* functions are parameterized block of JavaScript code that can be invoked
 exactly like methods in other languages*/

 function addOne(x){ // Define a function named addOne 
                    //that will addOne to the variable x
    return x + 1;
    // Return passed value plus one
 }


 console.log( addOne(10.4)); // Works with both doubles and ints

 let square = function(x) { // Functions can also be assigned to variables
     return x * x;
 }; // End assignment using semicolon

 console.log(square(addOne(10)));

 /* Arrow Functions are used to write short and neat functions
 / Most commonly used when you wanst to pass an unnamed function
   as an argument to another function */
   
 const add1 = x => x + 1;
 const sqr = x => x * x;

 console.log(add1(10));
 console.log(sqr(10));