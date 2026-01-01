//.find function can help you find the element 
const numbers = [1,2,3,4,5,6,7]
let ans = numbers.find((num)=> num === 4);
console.log(ans);

// .findIndex is a function that can helo you in finding the index

let ans1 =  numbers.findIndex((num) => num === 3);
console.log(numbers[ans1]);

//includes checks and return the boolean value
// for examples does this qarray exist 3 it will check and return the solution
let ans3 = numbers.includes(3)
console.log(ans3);


//filter --> if you want to filter out a particular  number series from array

const newArr = numbers.filter((num) => num % 2 == 0)
console.log(newArr);

//.slice method is used when you want a sub-array from an actual array
const array1 = ['a', 'b', 'c', 'd', 'e'];
let newArr1 = array1.slice(1,5);
console.log(newArr1);
//.splice method removes the elements from the array . the elements which it remmoves print them in the new Array
let newArr2 = array1.splice(1,3);
console.log(newArr2);
console.log(array1);