//Arrays
const students = ['piyush' , ' john' , 'jane' , 'Nitin'];
console.log(students.length);
console.log(students[3])
students[3] = "Nitin Chauhan"
console.log(students[3]);

// if you want to add a element in the end of the array use push function
students.push("Alexa");
students.push("siri");
console.log(students);

// arrays are hetrogeneous 
//you can add any type of value inside a array in js
const myArray = ['hello' , 'any' ,'value' , 'of' ,'js',true];
console.log(myArray);
myArray.push("Nitin");
console.log(myArray.indexOf('any'));

console.log(myArray.length);
myArray.pop(4)
console.log(myArray);
console.log(myArray.length);
myArray.reverse();
console.log(myArray);
