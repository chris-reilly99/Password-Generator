var passwordLength = 0
var numbers = true
var capitals = true
var lowerCase = true
var symbols = true

var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var capitalsArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbolsArr = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

var passwordArr = []

// functions here

function passwordRules(){
  numbers = confirm("Would you like your password to include numbers?")
  capitals = confirm("Would you like your password to include capital letters?")
  lowerCase = confirm("Would you like your password to include lowercase letters?")
  symbols = confirm("Would you like your password to include symbols?")
}

function passwordSize(){
  var passwordLength = prompt("How many characters would you like in your password? You must choose a length between 8 and 128 characters.");

  if (passwordLength < 8 || passwordLength > 128 ){
    window.alert("Password length must be between 8 and 128 characters.");
    passwordSize();
  }
  else return passwordLength;
}

// use if statement to generate password using variable criteria, only if the user selects to have those types of characters
function generatePassword() {
  passwordArr = []
  passwordRules();
  var passLength = passwordSize()
  i = 0;
  console.log(passLength)
  while(i < passLength){
    var numChoice = Math.floor(Math.random() * numbersArr.length)
    var capChoice = Math.floor(Math.random() * capitalsArr.length)
    var lowChoice = Math.floor(Math.random() * lowerCaseArr.length)
    var symChoice = Math.floor(Math.random() * symbolsArr.length);

    if (numbers === true && i < passLength) {
      passwordArr.push(numbersArr[numChoice])
      i++
    }
    if (capitals === true && i < passLength) {
      passwordArr.push(capitalsArr[capChoice])
      i++
    }
    if (lowerCase === true && i < passLength) {
      passwordArr.push(lowerCaseArr[lowChoice])
      i++
    }
    if (symbols === true && i < passLength) {
      passwordArr.push(symbolsArr[symChoice])
      i++
    }
  }
  console.log(passwordArr)
  return passwordArr.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
