const hello = document.querySelector('#hello');
hello.style.color = "black";
hello.addEventListener('click',function(){
    console.log("You clicked it");
    if(hello.style.color === "black"){
        hello.style.color = "blue";
    }else{
        hello.style.color = "black";
    }
})