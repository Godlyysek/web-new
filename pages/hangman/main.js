const words = ['word', 'pepega', 'jones', 'ferko'];

const choice = words[Math.floor(Math.random() * words.length)];

let h1 = document.getElementById('word');

let lives = 5;

let result = makeWord();


function makeWord() {
    let wordString = choice.split('');
    console.log(wordString);

    let word = [];

    for (let i = 0; i < wordString.length; i++) {
        word.push('_');
    }
    console.log(word);
    showWord(word);
    return word;
}

function guess(letter) {
    document.getElementById(letter).remove();

    let error = 0;


    for (let i = 0; i < result.length; i++) {
        console.log(choice[i]);
        console.log(letter);
        if (choice[i] == letter) {
            console.log('found');
            result[i] = letter;
        }
    }

    showWord(result);

    if (error != 0) {
        lives -= 1;
    }
    if (lives == 0) {

    }
}

function printLetter(letter) {
    console.log(letter);
}


function showWord(arr) {
    let word = '';
    for (let i = 0; i < arr.length; i++) {
        word += arr[i];
    }
    h1.innerHTML = word;
}

function revealWord() {

}