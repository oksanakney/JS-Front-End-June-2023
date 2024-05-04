function solve(array) {
    array.sort((a, b) => a - b);
    let result = [];
    // Initislize 2 pointers
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        result.push(array[right]);
        right--;
        if (left !== right) {
            result.push(array[left]);
            left++;
        }
    }    
    console.log(result);
}

solve ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);