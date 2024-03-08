// Date

// JavaScript date object represents a single movement of time in a platform
// Date object encapsulated an integral number that represents milliseconds since the midnight at the beginning of January 1,1970

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) //month start with 0
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023


let mmddyy = new Date("01-03-2024") 
console.log(mmddyy.toLocaleString());

console.log(Math.floor(Date.now()/1000)); //convert into second


let date = new Date()

console.log(date.getDate());
console.log(date.getMinutes());
console.log(date.getSeconds());



