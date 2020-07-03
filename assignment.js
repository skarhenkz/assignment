function charCodeOfString(str) {
  return str.charCodeAt(0);
}
console.log(charCodeOfString("hello"));

function multiplication(num, num2) {
  return num * num2;
}
console.log(multiplication(12, 12));

function division(num, num2) {
  return num / num2;
}
console.log(division(12, 2));

function findRemainder(num) {
  return num % 2;
}
console.log(findRemainder(33));
function strMultiplication(x) {
  let num = x.split("");
  let num1 = 1;
  for (let i = 0; i < num.length; i++) {
    num1 = parseInt(num[i]) * num1;
  }
  return num1;
}
console.log(strMultiplication("12"));
