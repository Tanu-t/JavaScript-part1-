const coding = ["js","c","cpp","python","java","nn"]


coding.forEach( (item,index,arr)=>{
     console.log(item,index,arr);
})

//we can pass function reference

const hello = (item)=>{
   console.log(item);

}

coding.forEach(hello)
