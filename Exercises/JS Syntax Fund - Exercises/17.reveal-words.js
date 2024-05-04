//TODO!!!
function solve(wordsString, templatesString) {
    let words = wordsString.split(', ');
    let templates = templatesString.split(' ');

    let usedWords = {}; // To keep track of words used in replacement

    for (let i = 0; i < templates.length; i++) {
        let template = templates[i];
        if (template.includes('*')) {
            let length = template.length - template.split('*').join('').length;
            for (let j = 0; j < words.length; j++) {
                if (words[j].length === length && !usedWords[words[j]]) { // Check if word is of the required length and not used before
                    templates[i] = template.replace('*', words[j]);
                    usedWords[words[j]] = true; // Mark the word as used
                    break;
                }
            }
        } else if (template.endsWith('*')) {
            let length = template.length - 1;
            for (let j = 0; j < words.length; j++) {
                if (words[j].length === length && !usedWords[words[j]]) {
                    templates[i] = words[j];
                    usedWords[words[j]] = true;
                    break;
                }    
            }
        }
    }

    console.log(templates.join(' '));
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');