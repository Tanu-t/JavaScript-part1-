// for declaring constant we have to use const keyword
// for declaring variable we have two variables let and var


const accountId = 12334
let accountEmail = "tanutyagi904@gmail.com"
var accountPassword = '12345'
accountCity = 'Jaipur' // bina variable ke aage kuch(let,var,const) likhe hue hum memory reserve kr skte hai 
let accountState;

//accountId = 2  // not allowed
//const can neither be updated nor be re-declared

// -> these are comments nodejs does not read these lines


accountEmail ='hjadg@gmail.com'
accountPassword='13224'
accountCity = 'Bengaluru'

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])



