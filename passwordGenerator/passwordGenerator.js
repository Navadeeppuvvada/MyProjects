
const passwordLength=12;
const LowercaseChar= true;
const UppercaseChar= true;
const includeNo= true;
const includeSymbol= true;
const btn=document.getElementById("btn");
const passwordLabel = document.getElementById("passwordLabel");

function generatepassword(length,lowercase,uppercase,includeNo,includeSymbol){
const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@#$%^&*()_+~`|}{[]:;?><,./-=";

let allowedChars="";
let pass="";

allowedChars+= lowercase?lowercaseChars:"";
allowedChars+= uppercase?uppercaseChars:"";
allowedChars+= includeNo?numbers:"";
allowedChars+= includeSymbol?symbols:"";
// console.log(`Allowed Characters: ${allowedChars}`);

if(length<0){
    console.log(`password length must be atleast greater than 0`);
}
if(allowedChars.length===0){
    console.log(`Atleast choose one of the character type `);

}

for(let i=0;i<length;i++){
    const randomIndex=Math.trunc(Math.random()*allowedChars.length);
    pass+=allowedChars[randomIndex];
}
return pass;
}

btn.onclick= function(){
    const password= generatepassword(passwordLength,LowercaseChar,UppercaseChar,includeNo,includeSymbol);
    passwordLabel.value = password;
}
const password= generatepassword(passwordLength,LowercaseChar,UppercaseChar,includeNo,includeSymbol);
console.log("Generated Password", password);