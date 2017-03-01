 var factors = function(num) {
   for (var i = 0; i <= num; i++){
     if (num % i === 0) {
       console.log(i);
     }
   }
 };
factors(20);
