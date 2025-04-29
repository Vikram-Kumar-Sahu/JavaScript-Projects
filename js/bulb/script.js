let a=document.querySelector(".circle");
let flag = 0;
        a.addEventListener("click",function(){
            if(flag===0)
                {
            a.style.backgroundColor="yellow";
            flag=1;}
    
    else{
        a.style.backgroundColor="white";
        flag=0;
    }});