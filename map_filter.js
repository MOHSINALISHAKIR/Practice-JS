let arr=[45,23,21];
let  arr_map=arr.map((value)=>{
    console.log(value);
    return value +1;
    
})
console.log(arr_map);
//filter 
let arr2=[45,23,24,21,0,3,5];
let arr_filter=arr2.filter((element)=>{
return element<10;
})
console.log(arr_filter);
//reduce 
let arr3=[1,2,3,4,5,6,7,8,9];
let arr_reduce=arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(arr_reduce);

