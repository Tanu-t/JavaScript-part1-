// let score = 33 
let score = "33abc" 

console.log(typeof (score)); // string

let valueInNumber = Number(score)
console.log(typeof (valueInNumber)); // number
console.log(valueInNumber); // NaN - not a number


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "tanu" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // 33 
console.log(typeof stringNumber); // string