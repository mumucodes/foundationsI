// import {inputValidation} from 'util.js';

const button = document.getElementById('button');
const testScore = document.getElementById('score');

function inputValidation(userAnswer){
    if(userAnswer === 'Yes' || 'y'){
        console.log('great')
        } else {
        prompt('false');
    }
};

button.addEventListener('click', function(e) {
    const userName= prompt('What\'s your name?');
    alert(`Hi ${userName}, welcome to my quiz`);
    
    const userPronouns = prompt(`What pronouns do you use ${userName}?`);

    alert(`Ok ${userName} I will use ${userPronouns} to refer to you in third person`);
    
    const userAnswer = prompt(`Are you ready to take a short quiz?`);
    inputValidation(userAnswer);

}); 