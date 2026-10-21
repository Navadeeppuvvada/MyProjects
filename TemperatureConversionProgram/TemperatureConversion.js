const showTemperature=document.getElementById("showTemperature");
const celsiusToF= document.getElementById("celsiusToF");
const fahrenheitToC=document.getElementById("fahrenheitToC");
const inputF= document.getElementById("inputF");
const btn = document.getElementById("btn");

btn.onclick=function(){
    let temp=Number(inputF.value);
    if(celsiusToF.checked){
      temp =(temp * 1.8) +32;
      showTemperature.textContent=temp+" º Fahrenheit"
    }
    else if(fahrenheitToC.checked){
     temp= (temp-32)*(5/9);  

     showTemperature.textContent=temp+" º Celsius";
    }
    else{
        showTemperature.textContent= "Select any of the conversion above ";
    }
}