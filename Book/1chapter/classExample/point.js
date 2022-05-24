class Point { // First class example; Class names are to be capitalized

    constructor(x,y){ // This function is used to initalize new instances
        
        this.x = x; // Assign Point.x to the value x

        this.y = y; // Assign Point.y to the value y
     } // The function by default returns the newly initalized object


    distance(){ // Method to compute distance from origin to point
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

let p = new Point(1,10);

console.log(p.distance());