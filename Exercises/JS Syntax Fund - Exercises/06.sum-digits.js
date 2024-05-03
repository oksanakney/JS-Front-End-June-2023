function solve(input) {
    let sum = 0;
    let inputString = input.toString();
    for(let i=0; i<inputString.length; i++) {
        sum += parseInt(inputString[i]);
    }
    console.log(sum);
}

solve(543);