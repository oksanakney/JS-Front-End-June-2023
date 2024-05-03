function solve(text, word) {
    let censored = text.replace(new RegExp(word, 'g'), repeat(word));
    console.log(censored);
}

function repeat(word) {
    return '*'.repeat(word.length);
}

solve('Find the hidden word', 'hidden');