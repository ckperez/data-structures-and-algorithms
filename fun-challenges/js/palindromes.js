//determine whether a given string is a palindrome

function isPal1(string){
  string = string.toLowerCase().replace(/[^a-z]/g, '');
  return string === string.split('').reverse().join('');
}

function isPal2(string){
  string = string.toLowerCase().replace(/[^a-z]/g, '');
  for (var i = 0; i < string.length / 2; i++){
    if (string.charAt(i) != string.charAt(string.length - 1 - i)){
      return false;
    }
  }
  return true;
}

function isPal3(string){
  string = string.toLowerCase().replace(/[^a-z]/g, '');

  if (string.length <= 1) return true;
  if (string.charAt(0) != string.charAt(string.length -1)) return false;
  return isPal3(string.substr(1, string.length - 2));
}


var testString1 = 'not a taco cat';
var testString2 = 'Nurse, I spy gypsies! Run!';


console.log('fn 1, str 1', isPal1(testString1));
console.log('fn 1, str 2', isPal1(testString2));


console.log('fn 2, str 1', isPal2(testString1));
console.log('fn 2, str 2', isPal2(testString2));

console.log('fn 3, str 1', isPal3(testString1));
console.log('fn 3, str 2', isPal3(testString2));
