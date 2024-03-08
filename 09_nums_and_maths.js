const score = 400;
// console.log(score); //400

const balance = new Number(100.34455)
// console.log(balance); // 100.34455

// console.log(balance.toString().length); //9
// console.log(balance.toFixed(2)); // 100.34

const otherNumber = 1123.8996
// console.log(otherNumber.toPrecision(4)); //1124

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); // 10,000,000
// console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000


// ---------------- Maths ------------------------

// console.log(Math); //Math is an object
// console.log(Math.abs(-4)); // maths absolute convert only negative value into positive =>4
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(4.3)); // 5 => choose only upper value
// console.log(Math.floor(4.9)); // 4 => choose only upper value
// console.log(Math.min(2,1,4,5,6)); // 1
// console.log(Math.max(2,1,4,5,6)); // 6

console.log(Math.random()); // it generate random value between 0-1
console.log((Math.random()*10) + 1); // 1 se upar chahiye value
console.log(Math.floor(Math.random()*10) + 1);

const min=10
const max=20

console.log(Math.floor(Math.random() * max-min+1) + min);




