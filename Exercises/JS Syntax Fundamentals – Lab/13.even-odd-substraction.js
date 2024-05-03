function solve(arr) {
    for(let i=0; i<arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let evenSum = 0;   
    let oddSum = 0;
    for(let j=0; j<arr.length; j++) {
        if(arr[j]%2 === 0) {
            evenSum +=arr[j];
        } else {
            oddSum +=arr[j];
        }
    }  

    console.log(evenSum - oddSum);
}

solve([3,5,7,9]);
