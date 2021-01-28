/*
1. Add input field where user can type their answer
2. User can click on Guess button
3. If answer is 'Manjinder' then output 'Correct Guess'
4. Otherwise output 'Not Correct - Try Again'
*/

const guessWords = ['London', 'Amritsar', 'Banian'];

const randomNumber = Math.floor((Math.random() * 3) + 0);

let answer;

let lives = 3;

const guess = () => {
    answer = document.getElementById('answer').value;

    if (answer === guessWords[randomNumber]) {
        document.getElementById('output').innerText = `Your Guess is Correct`;
    } else {
        lives--;

        if (lives < 1) {
            document.getElementById('output').innerText = 'Game Over!';
            document.getElementById('lives').innerText = lives;
        } else {
            document.getElementById('output').innerText = `Please try again`;
            document.getElementById('lives').innerText = lives;
        }
    }
}

const reset = () => {
    document.getElementById('output').innerText = '';
    document.getElementById('answer').value = '';
    document.getElementById('lives').innerText = 3;
}