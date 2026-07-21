// console.log(sum(2,3));
// function sum(a,b){
//     return a+b;
//     console.log("hello")
// }
// const sum=(a,b)=>{
//     return a+b;

// }
// console.log(sum(8,9));
//argument object 
// function sum(a,b){
//     console.log(arguments);
//     return a+b;

// }
// sum(1,2);//argument objects just work for normal function not for arrow function
//if we dont pass anything then it gives {} braces
const sum =(...number) =>{
    console.log(number);

}
sum(1,2,3,45,6,6,7);
//rest parameter must be last formal paramter;if we use at front or something it wont work then
//higher ordeer function is the one calling the callback functionc