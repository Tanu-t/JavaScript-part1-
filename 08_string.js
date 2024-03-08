const name="tanu"
const age = 22

console.log(name+age+"hello");

// string interpolation

console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String('tanupro')


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4) //not include last character
console.log(newString);

const anotherString = gameName.slice(-6,4) // it give reverse value, we can give negative value
console.log(anotherString);

const trimString = "     hello      "
console.log(trimString.trim());
