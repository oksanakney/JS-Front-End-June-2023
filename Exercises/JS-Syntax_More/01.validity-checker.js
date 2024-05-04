function solve(x1, y1, x2, y2) {
   let x0 = 0;
   let y0 = 0;
   let distance1 = Math.sqrt(((x1-x0) ** 2 ) + ((y1-y0)**2));
   let distance2 = Math.sqrt(((x2-x0) ** 2 ) + ((y2-y0)**2));
   let distance3 = Math.sqrt(((x2-x1) ** 2 ) + ((y2-y1)**2));

   if (distance1%1 === 0) {
      console.log(`{${x1}, ${y1}} to {${x0}, ${y0}} is valid`);
   } else {      
      console.log(`{${x1}, ${y1}} to {${x0}, ${y0}} is invalid`);
   }
   if (distance2%1 === 0) {
      console.log(`{${x2}, ${y2}} to {${x0}, ${y0}} is valid`);
   } else {      
      console.log(`{${x2}, ${y2}} to {${x0}, ${y0}} is invalid`);
   }
   if (distance3%1 === 0) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
   } else {      
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
   }
}

solve(3, 0, 0, 4);