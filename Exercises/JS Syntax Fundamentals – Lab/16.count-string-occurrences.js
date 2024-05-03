function solve(string, searchedWord) {
    let words = string.split(' ');
    let counter = 0;
    for(let word of words) {
        if(word === searchedWord) {
            counter++;
        }
    }
    console.log(counter);
}

solve('softuni is great place for learning new programming languages', 'softuni');