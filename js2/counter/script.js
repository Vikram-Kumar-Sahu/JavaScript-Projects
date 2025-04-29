let count=document.querySelector("#counter");
let lower=document.querySelector(".Lower");
let upper=document.querySelector(".Upper");

let a = parseInt(count.innerText); 
lower.addEventListener("click",function(){
    a--;
    count.innerHTML=a;
});
upper.addEventListener("click",function(){
    a++;
    count.innerHTML=a;
});