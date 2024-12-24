// //question no one 
// let arr=[1,2,34,45];
// let enternum=prompt("enter a number");
// arr.push(enternum);
// console.log(arr);
// //question no 2
//  let a;
//  do{
//     a=prompt("enter a number ");
//     arr.push(a);
//  }while(a!=0)

//question no 3
let num=[1,4,5,67,6,7,23,45,56,78,67,67,667];
let filternum=num.filter((Element)=>{
    return Element <10;
})
console.log(filternum);

let squarearr=[1,2,34,567,67];
let foreachsquare=squarearr.forEach((value)=>{
    console.log(value*value);
    
})
console.log(foreachsquare);

