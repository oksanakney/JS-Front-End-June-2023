function solve(...inputStrings) {
    let result = parseInt(inputStrings[0]);
    for (let i=1; i<inputStrings.length; i++) {
        switch (inputStrings[i]) {
            case 'chop': 
                result /= 2; 
                break;
            case 'dice': 
                result = Math.sqrt(result); 
                break;
            case 'spice': 
                result += 1; 
                break;
            case 'bake': 
                result *= 3; 
                break;
            case 'fillet': 
                result *= 0.8; 
                break;            
        }
        
        if(Number.isInteger(result)) {
        //if (result%1 === 0) {            
            console.log(result);
        } else {
            console.log(result.toFixed(1));
        }        
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');