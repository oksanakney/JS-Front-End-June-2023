function reverse(n, inputArr) {
    let arr = [];    
    for(let i=0; i<n; i++) {
        arr.push(inputArr[i])
    }
    let output = '';
    for(let j=arr.length-1; j>=0; j--) {
        output += arr[j] + ' ';
    }

    console.log(output.trim());
    return output.trim();
}

reverse(4, [-1, 20, 99, 5]);