// to uppercase
function stringToUpperCase(str){
  return str.toUpperCase();
}
console.log(stringToUpperCase("henry"));

// to lowercase
function stringToLowerCase(person){
  return person.toLowerCase()
}
console.log(stringToLowerCase("HENRY"));

// capitalize
function capitalizeString(letter){
  return letter.charAt(0).toUpperCase() + letter.slice(1)
}
console.log(capitalizeString("hello"))

