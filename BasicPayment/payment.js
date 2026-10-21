const subscribe = document.getElementById("subscribe");
const card= document.getElementById("card");
const upi=document.getElementById("upi");
const cash=document.getElementById("cash");
const SubmitB=document.getElementById("SubmitB");
const label1=document.getElementById("label1");
const label2= document.getElementById("label2");

SubmitB.onclick= function(){
    if(subscribe.checked){
        label1.textContent="You are Subscribed Buddy";
    }
    else{
     label1.textContent="You aren't Subscribed Buddy";
    }

    if(upi.checked){
        label2.textContent="You choosed UPI method inorder to pay !!";
    }
     else if(card.checked){
        label2.textContent="You choosed card method inorder to pay !!";
    }
     else if(cash.checked){
        label2.textContent="You choosed cash method inorder to pay !!";
    }
    else{
        label2.textContent="Please choose any way of payment";
    }
}