function solve(count, type, day) {
    let price;
    let totalPrice;
    switch (type) {
        case "Students":
            if(day === 'Friday') {
                price = 8.45;
            } else if(day === 'Saturday') {
                price = 9.80;
            } else if(day === 'Sunday') {
                price = 10.46;
            }
        break;
        case "Business":
            if(day === 'Friday') {
                price = 10.90;
            } else if(day === 'Saturday') {
                price = 15.60;
            } else if(day === 'Sunday') {
                price = 16.00;
            }
        break;
        case "Regular":
            if(day === 'Friday') {
                price = 15;
            } else if(day === 'Saturday') {
                price = 20;
            } else if(day === 'Sunday') {
                price = 22.50;
            }
        break;    
        default:
            break;
    }
    totalPrice = count * price;
    //Business if the group is bigger than or equal to 100 
    //people 10 of them can stay for free    
    if(type === "Students" && count>=30) {
        totalPrice = totalPrice * 0.85;
    } else if(type === "Business" && count>=100) {
        totalPrice = totalPrice - (price * 10);
    } else if(type === "Regular" && count>=10 &&count<=20) {
        totalPrice = totalPrice * 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");