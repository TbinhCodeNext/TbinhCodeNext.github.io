console.log("Any message you want")

// learning about variable (number)
let meaningOfLife: number;
meaningOfLife = 51;
console.log(meaningOfLife)

// learning about variable (boolean)
let choices: boolean = false;

// If-Else statements
if (choices) {
    console.log("choices is true");
} else {
    console.log("choices is false");
}

if (meaningOfLife < 50) {
    console.log("meaningOfLife is less than 50");
} else {
    console.log("meaningOfLife is greater than 50");
}

// Functions
function sum(num1: number, num2:  number): number {
    return num1 + num2;
}

let result: number = sum(2.9, 100)
console.log(result)

// --------------------- Excercise 1 ------------------

function logif(boolTest: boolean, testStr: string) {
    if (boolTest) {
        console.log(testStr)
    }
}

logif(true, "I am sleepy")

// Interfaces
interface HotPot {
    isItSpicy: boolean;
    spicyRating: number;
    spicyName: string;
}

let myHotPot: HotPot;
myHotPot = {
    isItSpicy: true,
    spicyRating: 9,
    spicyName: "Adam is spicy"
}

console.log(myHotPot.spicyName);

// Classes
class Animal {
    name: string;
    heartRate: number;

    constructor(name: string, heartRate: number) {
        this.name = name;
        this.heartRate = heartRate;
    }

    // Methods
    introduction() {
        console.log(this.name);
    }
}

let panda: Animal;
panda = new Animal("Giggles", 120);
console.log(panda.name);
panda.introduction();

let giraffe: Animal;
giraffe = new Animal("Peter", 45);
giraffe.introduction();