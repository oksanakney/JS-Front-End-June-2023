function solve(speed, area) {
    let speedLimit;
    let difference;
    let status;
    switch(area) {
    case 'residential': speedLimit = 20; break;
    case 'city': speedLimit = 50; break;
    case 'interstate': speedLimit = 90; break;
    case 'motorway': speedLimit = 130; break;
    }
    if(area === 'residential' && speed<=20 || area === 'city' && speed<=50 
      || area === 'interstate' && speed<=90 || area === 'motorway' && speed<=130) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        difference = speed - speedLimit;
        if(difference<=20) {
            status = 'speeding';
        } else if(difference<=40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

solve(21, 'residential');