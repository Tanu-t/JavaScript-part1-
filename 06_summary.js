//kis tareeke se data ko memory me rakhha jaata hai or access kiya jaata hai us basis pr data ka 2 categorisation hai
//1. primitive
//2. non-primitive

//js is a Dynamically typed language => variable type are determined and checked at runtime


// primitive(call by value)

//7 types: String, Number , Boolean , bigInt , Symbol, null , undefined

// typeof string => string
// typeof Number => number
// typeof Boolean => boolean
// typeof null => object
// typeof undefined => undefined
//typrof function => function object


//Reference (Non primitive)

//Array, Objects , Functions

const heroes = ['shaktiman','naagraj'];

const obj ={
    name:"tanu",
    age:22,
}

const abc = function(){
  console.log('hello world');
}

console.log(typeof abc); // function