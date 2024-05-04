function solve(array, num) {
    let rotationIndex = num % array.length;
    let rotatedArray = array.slice(rotationIndex).concat(array.slice(0, rotationIndex));
    console.log(rotatedArray.join(' '));
    
}

solve([2, 4, 15, 31], 5);