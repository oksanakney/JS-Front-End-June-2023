function solve(array, n) {
    let result = [];
    for (let i=0; i < array.length; i+=n) {
        result.push(array[i]);
    }

    console.log(result);
}

solve(['dsa',
'asd',
'test',
'tset'],
2);