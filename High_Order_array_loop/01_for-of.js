// for of 

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greeting = "hello world"

for (const greet of greeting) {
    if(greet === ' ')
        continue;
   else
    console.log(`Each char is ${greet}`);
}

//map

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United State of America")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key , ':-' , value);
}

const myObj ={
    game1 : "Spiderman",
    game2 : "Batman"
}

for (const [key,value] of myObj) {
    // console.log(key,value);          //object is not iterable through for-of loop
}
