//for loops when we know the iteration
// for(let i = 1 ;  i <= 10 ; i++){
//     console.log('Nitin ' + i);
// }

//while -> we dont know the time and iteration;
 let ip = 0 ;
 let house = 110;
// while(ip != house){
//     ip++;
//     console.log("Step taken " + ip);
// }


// do while loop ---> first run the code then check the condition
// do{
//     ip++;
//     console.log("step taken " + ip);
// }while( ip <= house);

// game -- guess the input
let number = 40;
let guess = 0;

do{
   guess = parseInt(prompt("guess a number"));
   if(guess == number){
    alert("winner");
    break;
   }
}while(guess != 0);

