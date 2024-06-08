//for-in

const myObj = {
   game1 : "spiderman",
   game2 : "batman"
}

for (const key in myObj) {
   console.log(myObj[key]);
}

const arr = [1,2,3,4,5]

for (const key in arr) {
    console.log(arr[key]);
}