// //Arrow function
// //1.syntax
// const sayHello = () => {
//     console.log("Hello!");
// };
// sayHello();

// const add = (a,b) => {
//     return a +b;
// }
// console.log(add(3,5)); 

// const addV2 = (a,b) => a + b;
// console.log(addV2(5,4));

// //2. 'arguments Keyword
// const addNumbers = (...numbs) => {
//     console.log(numbs);
// }
// addNumbers(1,2,3); //Error


//3. hoisting
sayHey();
function sayHey(){
    console.log("Hey!");
}

//4. This keyword
const obj  = {
    value : 20 ,
    myFunction:function (){
        console.log('value is: ' + this.value)
    }
}
