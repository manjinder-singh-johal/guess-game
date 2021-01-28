/*
1. Add input field where user can type their answer
2. User can click on Guess button
3. If answer is 'Manjinder' then output 'Correct Guess'
4. Otherwise output 'Not Correct - Try Again'
*/

const guessWords = ['London', 'Amritsar', 'Banian'];

const randomNumber = Math.floor((Math.random() * 3) + 0);

let answer;

const guess = () => {
    answer = document.getElementById('answer').value;

    if (answer === guessWords[randomNumber]) {
        document.getElementById('output').innerHTML = `Your Guess is Correct`;
    } else {
        document.getElementById('output').innerHTML = `Your guess is not correct Please try again`;
    }
}

const reset = () => {
    document.getElementById('output').innerText = '';
    document.getElementById('answer').value = '';
}