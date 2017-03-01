var printchar= function(char,times) {
  var str = "";
  for (var i = 0; i <= times; i++){
    str = str + char;

  }
  return str;
};
var printBox= function(height) {
  for (var i = 1; i<= height; i++){
    if (i === 1 || i === height) {
      console.log(printchar("*", height));
    }
    else {console.log("*" + printchar(" ",height-2) + "*");}

}
};
printBox(5);
