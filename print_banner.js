var printchar= function(char,times) {
  var str = "";
  for (var i = 0; i <= times; i++){
    str = str + char;

  }
  return str;
};
var printBanner= function(text) {
  for (var i = 1; i<= 3; i++){
    if (i === 1 || i === 3) {
      console.log(printchar("*", text.length+3));
    }
    else {console.log("*" + " " + text + " " + "*");}

}
};
printBanner("I forgot javascript syntax!");
