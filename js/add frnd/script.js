let istatus=document.querySelector("h5");
let addfrnd=document.querySelector("#add");
let flag="add";

addfrnd.addEventListener("click",function(){
    if(flag==="add")
        {
            istatus.innerHTML="Friends";
            istatus.style.color="green";
            addfrnd.innerHTML="Remove";
            addfrnd.style.backgroundColor="#dadada";
            addfrnd.style.color="black";
            flag="remove";
        }
        else{
            istatus.innerHTML="Stranger";
            istatus.style.color="red";
            addfrnd.innerHTML="Add Friend";
            addfrnd.style.backgroundColor="cadetblue";
            addfrnd.style.color="white";
            flag="add";
        }
})
