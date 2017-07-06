var str1 = "hEllO";
var str2 = "racEcar";
var str3 = "bAnAnA";


var antiCap = function(str){
    var output = "";
    for (var i = 0, len = str.length; i < len; i++) {
    var character = str[i];
    if (character == character.toLowerCase()) {
      // The character is lowercase
      output = output + character.toUpperCase();
    } else {
      // The character is uppercase
      output = output + character.toLowerCase();
    }
  }
    return output;
}

console.log(antiCap(str1));
console.log(antiCap(str2));
console.log(antiCap(str3));