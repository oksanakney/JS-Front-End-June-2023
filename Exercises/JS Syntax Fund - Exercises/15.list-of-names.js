function sortNames(names) {
    names.sort();
    for(let i=0; i<names.length; i++) {       
        let name = names[i];
        console.log(`${i+1}.${name}`);
    }
}

sortNames(["John", "Bob", "Christina", "Ema"]);