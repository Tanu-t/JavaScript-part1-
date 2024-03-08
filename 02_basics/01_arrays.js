

// const array = [0,1,2,3,4,5];
// const newArray = new Array(1,2,3,4,5);

// console.log(newArray);

// arr method

// newArray.push(6) //push element at end
// newArray.pop()  // pop element from end

// newArray.unshift(0) // add element at starting
// newArray.shift() // remove element from starting

// console.log(newArray.includes(9)); //false
// console.log(newArray.indexOf(9));  //-1
// console.log(newArray.indexOf(4));  //3

// const myArr = newArray.join()
// console.log(myArr); // join() convert it into string
// console.log(newArray);
// console.log(typeof myArr); //string


//slice and splice

const arr1 = new Array(1,2,3,4,5,6)
console.log("A" ,arr1);

const arr2 = arr1.slice(1,3)
console.log(arr2);
console.log("B",arr1);

const arr3 = arr1.splice(1,3) 
console.log("C",arr1); // original array manupulate ho jaayga
console.log(arr3)