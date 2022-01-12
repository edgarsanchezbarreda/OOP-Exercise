// Part One
class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk (){
        console.log('beep');
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}

// Part Two
class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
    }
    numWheels(){
        console.log(4);
    }
}

// Part Three
class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        console.log('VROOOOOM!!!!');
    }
}

// Part Four
class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)) {
            console.log('You may onlt park vehicles here, sorry!');
        } 
        if (this.vehicles.length >= this.capacity) {
            console.log("Sorry, we're full at the moment!");
        } else{
            this.vehicles.push(newVehicle);
            console.log("Vehicle added!");
        }
        
    }
}


















