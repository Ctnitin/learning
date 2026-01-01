// //high order functions of arrays
// const students = ['nitin' , 'singh' , 'chauhan' , 'Piyush garg' , 'Jane' , 'john'];
// // function print(n){
// //     console.log(n);
// // }

// //  students.forEach(print);

// students.forEach((val)=>{console.log(val + " chauhan")});
// students.map((val) => console.log(val));


// const numbers = [1,2,3,4,5,6,7];
// // numbers.forEach((num)=>console.log(num * 2)); this will just only print a number but not make a new array
// // but .map function will create a new array too
// let newArr = [];
// numbers.forEach((num)=>newArr.push(num * 2));
// console.log(newArr);

// function double(n){
//     return n * 2;
// }
// let newArray = numbers.map(double);
// console.log(newArray);

// learning .map function

let numbers = [1,2,3,4,5,6,7];
const double = (n) => n * 2;
let newArr = numbers.map(double);
console.log(newArr);
