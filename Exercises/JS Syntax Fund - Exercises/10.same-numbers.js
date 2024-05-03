function solve(input) {
    let sum = 0;
    let areAllNumbersTheSame = true;
    let inputString = input.toString();
    for(let i=0; i<inputString.length; i++) {
        sum += parseInt(inputString[i]);
        if(inputString[i] !== inputString[0]) {
            areAllNumbersTheSame = false;
        }
    }
    console.log(areAllNumbersTheSame);
    console.log(sum);
}

solve(1234)