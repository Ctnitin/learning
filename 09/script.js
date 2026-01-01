// a function that takes a function as an argument called high order function

function add(a,b,cb){
    let result  = a + b;
    cb(result);
}
add(2,3 , function(val){
    console.log(val)
}) 