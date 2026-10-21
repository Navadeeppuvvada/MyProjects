let count=0;
const increaseB=document.getElementById("increaseB").onclick= function(){
    count++;
    label.textContent=count;
}
const decreaseB=document.getElementById("decreaseb");
const resetB=document.getElementById("ResetB");
const label=document.getElementById("label");

increaseB.onclick= function(){
    count++;
    label.textContent=count;
}
decreaseB.onclick= function(){
    count--;
    label.textContent=count;
}
resetB.onclick=function(){
    count=0;
    label.textContent=count;
}