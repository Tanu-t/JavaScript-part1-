
// stack (Primitive), Heap (non-Primitive) => jitna bhi non-primitive type data hota hai heap mein jata hai or jb bhi hum usey access krte hai uska refrence milte hai na ki copy

let myName = "tanutyagi"

let nickname = myName;

console.log(nickname); // tanutyagi
nickname = 'dolly'

console.log(nickname); //dolly
console.log(myName); //tanutyagi


// example of heap memory

const myObj = {
    name:"tanu",

}

let myObj2 = myObj

myObj2.name="dolly"
console.log(myObj.name);
console.log(myObj2.name);

