let num=[1,2,3,4,5,6,7,8,9];
//for loop for arrays
for(let i=0;i<num.length;i++){
    console.log(num[i]);
    
}
console.log("for of loops ");

//for of loops
for (let element of num) {
    console.log(element);
    
    
}
console.log("foreach loop ");

//foreach loop
num.forEach((element)=>{
    console.log(element*element);
    
})