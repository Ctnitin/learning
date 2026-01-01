// function is a block of code that perform specific task 
// //functions

// function greet(){
//     console.log("Hello, World!");
// }
// greet();


// //parameters
// function add(a,b){ /// here a and b are arguments
//     console.log(a+b);
// }
// add(4,5); // here we give parameters;

// function multiply(c,d){
//     return c*d;
// }
// let result = multiply(3,5);
// console.log(result);

// unlimited arguments accept
function addNumbers(){
    let ans = 0;
    for(let i = 0 ; i < arguments.length ; i++){
        //console.log(arguments[i]);
        ans = ans + arguments[i];
    }
    return ans;
}

function addNumbersV2(...numbers){ // spread operator
    let ans = 0;
    for(let i = 0 ; i< numbers.length ; i++){
        ans = ans + numbers[i];
    }
    return ans;
}

let result = addNumbers(1,3,7,9);
console.log(result);