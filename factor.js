my_array = [ ];
 var factors = function(num) {
   for (var i = 0; i <= num; i++){
     if (num % i === 0) {
       my_array.push(i);

     }
   }
 };
factors(20);
console.log(my_array);
