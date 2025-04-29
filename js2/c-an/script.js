const curso=document.querySelector(".cursor");
var timeout;
let main= document.querySelector(".main");

main.addEventListener("mousemove",(e)=>{
    curso.style.left=e.pageX+"px";
    curso.style.top=e.pageY+"px";
    curso.style.display='block';

    function mouseStopped(){
        curso.style.display='none';
    }

    clearTimeout(timeout);
    timeout=setTimeout(mouseStopped,1000);
    
});
document.addEventListener('DOMContentLoading',()=>{
    curso.style.display='none';
});