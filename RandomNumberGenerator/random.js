const btn= document.getElementById("myBt");
const label= document.getElementById("label");
const min=1;
const max=100;
btn.onclick=function (){
    let res=Math.trunc(Math.random()*(max-min))+min;
    label.textContent=res;
    console.log(res);
}
