
const marvel_heros = ["thor","Ironman","spiderman"];

const dc_heros = ["spiderman","flash","batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); 

// console.log(marvel_heros[3][2]);

//  const arr1=marvel_heros.concat(dc_heros)
// console.log(arr1);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

console.log(Array.isArray("TANU")); //false
console.log(Array.from("TANU"));
console.log(Array.from({name:"tanu"})); //interseting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(scrore1, score2, score3));
