// Error Code: 

class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal makes sound");
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        this.name = name; // ❌ Error here
        this.breed = breed;
    }
    sound(){
        console.log(`${this.name} says Meow!`);
    }
}

const myCat = new Cat ("Snowbell", "Persian");

console.log(myCat.name);
console.log(myCat.breed);
myCat.sound();
myCat.makeSound();

// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// Solution: Always Call super() Before Using this.

class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal makes sound");
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name) // ✅ Correct Method
        this.breed = breed;
    }
    sound(){
        console.log(`${this.name} says Meow!`);
    }
}

const myCat = new Cat ("Snowbell", "Persian");

console.log(myCat.name);   // Output: Snowbell
console.log(myCat.breed);  // Output: Persian
myCat.sound();             // Output: Snowbell says Meow!
myCat.makeSound();         // Output: Animal makes sound
