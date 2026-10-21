// const min=1;
// const max=100;

// const answer= Math.trunc(Math.random()*(max-min))+min;
// console.log(answer);
// let guess;
// let chance=true;
// let attempts=0;


// while(chance){
//     guess=window.prompt("Enter a number");

//     guess=Number(guess);
     
//     if(guess<min || guess>max){
//         window.alert(`Enter a value between ${min} - ${max} only `);
//     }
//     else{                              
//         attempts ++;
//         if(guess<answer){
//             window.alert(`The answer is greater than ${guess}`);
//         }
//         else if(guess>answer){
//             window.alert(`The answer is lower than ${guess}`);
//         }
//         else{
//             chance=false;
            
//             window.alert(`YOu predicted the answer correctly in ${attempts}th attempt  `);
            
//             attempts=0;
            
//         }
//     }

// }


const min = 1;
const max = 100;

const guessField = document.getElementById("guessField");
const mybtn = document.getElementById("mybtn");
const resultShow = document.getElementById("resultShow");

const answer = Math.trunc(Math.random() * (max - min + 1)) + min;

let chance = true;
let attempts = 0;

mybtn.onclick = function () {
    if (!chance) {
        return;
    }

    const guess = Number(guessField.value);

    if (guessField.value === "") {
        resultShow.textContent = "Please enter a number.";
    } else if (guess < min || guess > max) {
        resultShow.textContent =
            `Enter a value between ${min} - ${max} only`;
    } else {
        attempts++;

        if (guess < answer) {
            resultShow.textContent =
                `The answer is greater than ${guess}`;
        } else if (guess > answer) {
            resultShow.textContent =
                `The answer is lower than ${guess}`;
        } else {
            chance = false;
            resultShow.textContent =
                `You found the answer in ${attempts} attempts!`;

            mybtn.disabled = true;
        }
    }
};
