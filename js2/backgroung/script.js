const main=document.querySelector(".main");
var but=document.querySelector(".but"); 
let a=0;

but.addEventListener("click",function(){
    console.log("ji");
    if(a===0){
        main.style.backgroundColor="pink";
    a++;
    }
    else if(a===1){
        main.style.backgroundColor="green";
    a++;
    }
    else if(a===2){
        main.style.backgroundColor="blue";
    a++;
    }
    else if(a===3){
        main.style.backgroundColor="red";
    a++;
    }
    else if(a===4){
        main.style.backgroundColor="purple";
    a++;
    }
    else if(a===5){
        main.style.backgroundColor="transparent";
    a=0;
    }
});




// const main = document.querySelector(".main");
// const but = document.querySelector(".but");

// const colors = ["pink", "green", "blue", "red", "purple", "transparent"];
// let a = 0;

// but.addEventListener("click", function() {
//     main.style.backgroundColor = colors[a];
//     a = (a + 1) % colors.length;
// });

