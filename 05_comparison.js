// console.log("2" > 1);
// console.log("02" > 1);


//avoid these types of convertions
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined > 0); //false


// reason
// The Reason is that an equality check == and comparison >< >= => <= work differently.
// Comparison convert null to Number, treating it as 0.


// === 

console.log("2" === 2); //false
