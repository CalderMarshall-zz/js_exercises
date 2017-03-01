
var tip = 0.00;
var tipAmount = function(bill, service) {
    if (service == "good") {
       tip = bill * 0.2;
       return tip;
    }
    else if (service == "fair") {
      tip = bill * 0.15;
      return bill * 0.15;
    }
    else if (service == "bad") {
      tip = bill * 0.10;
      return bill * 0.10;
    }
};
var totalAmount = function(bill,serivce) {
  return bill + tip;
};
var splitAmount = function(bill,service,splitnum) {
  return (bill + tip)/splitnum;
};

console.log(tipAmount(100,"good"));
console.log(totalAmount(100,"good"));
console.log(splitAmount(100,"good",3));
