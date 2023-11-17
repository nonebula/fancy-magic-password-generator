// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
//1. prompt to get user input for password
var passLength = prompt("Enter the length of your password (between 8 and 128 characters");
if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
  alert("Invalid password length. Please enter a number between 8 and 128.");
  return;
}
//2. use confirm to ask whether to include others
var incLowerCase = confirm("Include lowercase characters?");
var incUpperCase = confirm("Include uppercase characters?");
var incNumber = confirm("Include numerical characters?");
var incSpecials = confirm("Include special characters?");
//3. validate user input (at least one character type selected)
if (!incLowerCase && !incUpperCase && !incNumber && !incSpecials){
  alert("Please select at least one character type.");
  return;
}
//4. return object containing user's chosen options
var allCharacters = "";
if (incLowerCase) {
  allCharacters += lowerCasedCharacters;
}
if (incUpperCase) {
  allCharacters += upperCasedCharacters;
}
if (incNumber) {
  allCharacters += numericCharacters;
}
if (incSpecials) {
  allCharacters += specialCharacters;
}
}


// Function for getting a random element from an array
function getRandom(arr) {

//steps:
//1. take an array as an argument and return random element from that array
//2. use Math.random() to generate random index within array length
//3. return element at randomly generated index
}

// Function to generate password with user input
function generatePassword() {
//steps:
//1. call getPasswordOptions to get the user's chosen options
getPasswordOptions();
//2. based on choices, concatenate the selected character arrays into a single array
var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * allCharacters.length);
  password+= allCharacters.getRandom(arr);
}
//3. use a loop to generate a password of the specified length, randomly selecting characters from the array
//4. return the generated password.
}

// Get references to the #generate element all this below = done
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//steps:
//1. add event listener to genpwbutton so that it can call the writePassword function
//2. inside function call generatePassword to get generated password
//3. use document.querySelector to get reference to the password text area
//4. set the value of the text area to the generated content



//When done: 
//test program
//debug
//launch and submit