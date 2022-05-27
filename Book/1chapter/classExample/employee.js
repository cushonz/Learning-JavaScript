class User{
    
    // Constructor Method
    constructor(first,last,password,age){
        this.firstName = first;
        this.lastName = last;
        this.password = password;
        this.age = age;
        this.minor = this.isMinor();
        
    }

    // A simple method to test if statements in JavaScript
    checkPass(){
        console.log(this.password);
        if (this.password == 123){
            console.log("this is it");
        }
    }

    // Used to determine if a user is a minor or adult
    isMinor(){
        if (this.age < 18){
            return true
        }
        else {
            return false;
        }
    }

}

let zac = new User("zac","cush","123",18);
console.log(zac.minor);